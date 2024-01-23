import { Quest } from "@/hook/types";
import Question from "./Question";

const questions: Quest[] = [
  {
    question: "How many participants can join a ClearLink video conference?",
    response:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    question: "Can I use ClearLink on multiple devices?",
    response:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    question:
      "Is ClearLink compatible with other video conferencing platforms?",
    response:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    question: "How does ClearLink ensure the security of my video conferences?",
    response:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    question: "Do I need to download any software to use ClearLink?",
    response:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
  {
    question: "What kind of customer support does ClearLink provide?",
    response:
      "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
  },
];

const Questions = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <div className='md:flex justify-between gap-20'>
        <div className="md:w-2/5 mb-10 md:mb-0">
          <p className='text-sm text-blue-700'>Support</p>
          <div className='font-semibold text-3xl text-black mt-2 mb-3'>FAQs</div>
          <p>
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our friendly
            team.
          </p>
        </div>
        <div className='md:w-3/5'>
          {questions.map((item, index) => (
            <Question
              key={index}
              question={item.question}
              response={item.response}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
