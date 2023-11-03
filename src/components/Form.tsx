import { useState } from "react";
import emailjs from "@emailjs/browser";
import Input, { fieldsClassName } from "./Input";
import Span from "./Span";
import Spinner from "./Spinner";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const serviceId = process.env.SERVICE_ID ?? "";
  const templateId = process.env.TEMPLATE_ID ?? "";
  const publicKey = process.env.PUBLIC_KEY ?? "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          email,
          subject,
          message,
        },
        publicKey
      );

      setSent(true);
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setError(true);
    }

    setIsLoading(false);

    setTimeout(() => {
      setSent(false);
      setError(false);
    }, 5100);
  };

  return (
    <form
      className="flex gap-4 flex-col items-center mt-10 lg:w-3/6"
      onSubmit={handleSubmit}
    >
      <fieldset className="flex flex-col w-full">
        <label htmlFor="email" className="text-xl mb-1">
          E<Span>-</Span>mail
        </label>
        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          value={email}
          setState={setEmail}
        />
      </fieldset>

      <fieldset className="flex flex-col w-full">
        <label htmlFor="subject" className="text-xl mb-1">
          Subject
        </label>
        <Input
          type="text"
          id="subject"
          placeholder="E-Subject"
          value={subject}
          setState={setSubject}
        />
      </fieldset>

      <fieldset className="flex flex-col w-full">
        <label htmlFor="message" className="text-xl mb-1">
          Message
        </label>
        <textarea
          required
          rows={5}
          id="message"
          placeholder="Type your message"
          className={fieldsClassName}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </fieldset>

      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-2">
        <p
          className={`text-center mx-auto py-2 px-4 mt-2 md:mt-0 rounded-md w-full lg:w-auto md:text-lg  
              ${
                error
                  ? "bg-red-900/80 text-red-300"
                  : "bg-emerald-900/80 text-emerald-300"
              } 
              ${
                sent || error
                  ? "block animate-disappear"
                  : "hidden md:block md:opacity-0"
              }`}
        >
          {error
            ? "Unexpected error, please try again"
            : "The message was sent successfully"}
        </p>

        <button
          type="submit"
          className={`bg-emerald-600 hover:bg-emerald-700 md:mt-0 w-full transition-all p-2 md:w-2/3 lg:w-36 rounded-lg uppercase shadow-lg hover:shadow-emerald-950 font-bold text-lg`}
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : "Send"}
        </button>
      </div>
    </form>
  );
};

export default Form;
