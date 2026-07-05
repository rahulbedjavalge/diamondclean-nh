import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContact } from "@/lib/contact.functions";
import { useI18n } from "@/lib/i18n";

export function ContactForm() {
  const { t, lang } = useI18n();
  const send = useServerFn(submitContact);
  const [service, setService] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const f = t.contact.form;

  const schema = z.object({
    name: z.string().trim().min(1, f.errors.name).max(100, f.errors.name),
    email: z.string().trim().email(f.errors.email).max(255, f.errors.email),
    phone: z.string().trim().max(40, f.errors.phone).optional(),
    service: z.string().optional(),
    message: z.string().trim().min(1, f.errors.message).max(2000, f.errors.message),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onBlur" });

  const onSubmit = async (values: FormValues) => {
    try {
      await send({
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone || "",
          service: service || "",
          message: values.message,
          lang,
        },
      });
      toast.success(f.successTitle, { description: f.success });
      setSubmitted(true);
      reset();
      setService("");
    } catch {
      toast.error(f.errorTitle, { description: f.error });
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-display text-2xl font-bold text-navy">
          {f.successTitle}
        </h3>
        <p className="max-w-sm text-muted-foreground">{f.success}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-2 rounded-full font-semibold"
          onClick={() => setSubmitted(false)}
        >
          {f.submit}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{f.name}</Label>
          <Input
            id="name"
            placeholder={f.namePh}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm font-medium text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{f.email}</Label>
          <Input
            id="email"
            type="email"
            placeholder={f.emailPh}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm font-medium text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">{f.phone}</Label>
          <Input
            id="phone"
            placeholder={f.phonePh}
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm font-medium text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">{f.service}</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service">
              <SelectValue placeholder={f.servicePh} />
            </SelectTrigger>
            <SelectContent>
              {t.services.items.map((s) => (
                <SelectItem key={s.title} value={s.title}>
                  {s.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{f.message}</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder={f.messagePh}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm font-medium text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full rounded-full font-bold shadow-red"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {f.sending}
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {f.submit}
          </>
        )}
      </Button>
    </form>
  );
}
