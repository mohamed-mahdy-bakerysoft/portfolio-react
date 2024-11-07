import {
  BeakerIcon,
  EnvelopeIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:diepulp@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="h-screen relative flex  flex-col text-center justify-center md:text-left ms:flex-row max-w-7xl px-10 mx-auto items-center">
      <h3 className="absolute tracking-[1.5rem] top-11 text-gray-500 uppercase">
        contacts
      </h3>
      <div className="flex flex-col ">
        <h4 className="text-4xl font-semibold text-center">
          I have the skills yo.{" "}
          <span className="decoration-[#f7ab0a]/50 underline"> Lets talk</span>
        </h4>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-center">
          <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
          <p>24536697878</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
          <p>123 Developer Lane</p>
        </div>
        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
          <p>vladimir.ivanov.dev@gmail.com</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
