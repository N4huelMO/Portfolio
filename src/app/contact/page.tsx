"use client";
import Form from "@/components/Form";
import Span from "@/components/Span";

const Contact = () => {
  return (
    <div className="mt-16 mx-auto xl:w-4/5">
      <h2 className="m-auto text-center text-xl sm:text-3xl lg:text-4xl leading-tight animate-fade-right">
        Do you like what i do<Span>?</Span> Do you have any doubt about me or my
        projects
        <Span>?</Span>
        <br />
        Contact me filling the form or through my social media
        <Span>.</Span>
      </h2>

      <div className="w-full lg:flex items-center justify-center animate-fade-right animate-delay-300">
        <Form />
      </div>
    </div>
  );
};

export default Contact;
