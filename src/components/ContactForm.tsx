
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/whatsinabox1@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = (await response.json()) as {
        success?: boolean | string;
        message?: string;
      };

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error(
          result.message || "No se pudo enviar el mensaje. Inténtalo de nuevo."
        );
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ha ocurrido un error. Inténtalo de nuevo más tarde."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="_subject"
        value="Nuevo mensaje desde TecnoSencillo"
      />
      <input type="hidden" name="_template" value="table" />

      {/* Campo oculto para ayudar a filtrar bots */}
      <div className="contact-honey" aria-hidden="true">
        <label htmlFor="website">No rellenes este campo</label>
        <input
          id="website"
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-name">Nombre completo</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Escribe tu nombre"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">Correo electrónico</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="nombre@ejemplo.com"
          autoComplete="email"
          maxLength={254}
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">¿En qué podemos ayudarte?</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Cuéntanos cómo podemos ayudarte..."
          rows={6}
          minLength={10}
          maxLength={5000}
          required
        />
        <span className="contact-field-hint">
          Explícanos tu consulta con el mayor detalle posible.
        </span>
      </div>

      <label className="contact-consent">
        <input type="checkbox" name="privacy_consent" value="Aceptado" required />
        <span>
          He leído y acepto la{" "}
          <Link href="/privacidad" target="_blank">
            Política de Privacidad
          </Link>
          .
        </span>
      </label>

      {status === "success" && (
        <div className="contact-alert contact-alert-success" role="status">
          <strong>¡Mensaje enviado!</strong>
          <span>
            Gracias por contactar con TecnoSencillo. Hemos recibido tu
            solicitud y la revisaremos lo antes posible.
          </span>
        </div>
      )}

      {status === "error" && (
        <div className="contact-alert contact-alert-error" role="alert">
          {errorMessage}
        </div>
      )}

      <button
        className="contact-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            Enviando mensaje...
            <span className="contact-spinner" aria-hidden="true" />
          </>
        ) : (
          <>
            Enviar mensaje
            <span aria-hidden="true">→</span>
          </>
        )}
      </button>

      <p className="contact-form-note">
        Tus datos se utilizarán únicamente para atender tu consulta, de acuerdo
        con nuestra Política de Privacidad.
      </p>
    </form>
  );
}
