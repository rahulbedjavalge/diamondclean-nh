import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
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

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40).optional(),
  service: z.string().optional(),
  message: z.string().trim().min(1).max(2000),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const { t, lang } = useI18n();
  const send = useServerFn(submitContact);
  const [service, setService] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

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
      toast.success(t.contact.form.successTitle, {
        description: t.contact.form.success,
      });
      reset();
      setService("");
    } catch {
      toast.error(t.contact.form.errorTitle, {
        description: t.contact.form.error,
      });
    }
  };

  const f = t.contact.form;

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
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">{f.phone}</Label>
          <Input
            id="phone"
            placeholder={f.phonePh}
            {...register("phone")}
          />
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
