'use client'
import { useRouter } from 'next/navigation';
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import {useState} from "react";
import MultipleChoice from "../components/multiple_choice";
import { cn } from "../utils/cn";


export default function Page() {
    const [ans1, setAns1] = useState("");
    const [ans2, setAns2] = useState("");
    const [ans3, setAns3] = useState("");
    const [ans4, setAns4] = useState("");
    const [ans5, setAns5] = useState("");
    const [ans6, setAns6] = useState("");
    const router = useRouter();
  
    const q1 = "1. How would you rate your overall happiness today? (1=worst, 5=best)";
    const q2 = "2. How would you rate your stress levels today? (1=worst, 5=best)";
    const q3 = "3. How motivated do you feel today? (1=worst, 5=best)";
    const q4 = "4. How well do you manage your work-life balance? (1=worst, 5=best)";
    const q5 = "5. How do you feel confident about achieving your study goal? (1=worst, 5=best)";
    const q6 = "6. Anything you wanna add?";
    
    console.log(ans1);


    function compile_data() {
        const suffix = " out of 5";
        const result = {
            q1: q1, q2: q2, q3: q3, q4: q4, q5: q5, q6: q6,
            a1: ans1 + suffix,
            a2: ans2 + suffix,
            a3: ans3 + suffix,
            a4: ans4 + suffix,
            a5: ans5 + suffix,
            a6: ans6
        }
        return result;
    }


    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("submmitted");
      if(!ans1 || !ans2 || !ans3) return;
      else console.log(ans1 + ans2 + ans3);
    }
    

    return (
      <div class="flex flex-col items-center px-16 pt-20 pb-2.5 bg-white max-md:px-5">
      <div class="flex flex-col mt-14 max-w-full w-[643px] max-md:mt-10">
        <div
          class="flex flex-col items-start py-12 pr-20 pl-9 rounded-3xl shadow-sm bg-white bg-opacity-50 max-md:px-5 max-md:max-w-full"
        >
          <div class="text-base tracking-wide leading-6 text-black max-md:ml-1">
          {q1}
          </div>
          <MultipleChoice setAns={setAns1} id={"happiness"} />
          {/* <div
            class="flex gap-5 justify-between mt-2 ml-3 max-w-full text-xs tracking-wide leading-4 text-black whitespace-nowrap w-[255px] max-md:ml-2.5"
          >
          </div> */}
                 </div>
        <div
          class="flex flex-col items-start py-12 pr-20 pl-9 mt-11 rounded-3xl shadow-sm bg-white bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          <div class="text-base tracking-wide leading-6 text-black max-md:ml-1">
            {q2}
          </div>
          <MultipleChoice setAns={setAns2} id={"stress"} />
        </div>
        <div
          class="flex flex-col items-start py-12 pr-20 pl-9 mt-11 rounded-3xl shadow-sm bg-white bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          <div class="text-base tracking-wide leading-6 text-black max-md:ml-1">
            {q3}
          </div>
          <MultipleChoice setAns={setAns3} id={"motivated"} />
        </div>
        <div
          class="flex flex-col items-start py-12 pr-20 pl-9 mt-11 rounded-3xl shadow-sm bg-white bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          <div class="text-base tracking-wide leading-6 text-black max-md:ml-1">
          {q4}
          </div>
          <MultipleChoice setAns={setAns4} id={"manage"} />
        </div>
 
 
        <div
          class="flex flex-col items-start py-12 pr-20 pl-9 mt-11 rounded-3xl shadow-sm bg-white bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          <div class="text-base tracking-wide leading-6 text-black max-md:ml-1">
          {q5}
          </div>
          <MultipleChoice setAns={setAns5} id={"confident"} />
          <div
            class="justify-center py-2 mt-7 text-base tracking-wide leading-6 text-purple-500 rounded-lg border border-purple-500 border-solid max-md:max-w-full"
          >
            Additional comments?
            <br/>
      
           <textarea  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           placeholder='I also feel myself...' name="Text1" cols="40" rows="5"></textarea>
 
 
          </div>
        </div>
        <button
           className="relative group/btn w-full text-white h-10 font-bold bg-[#2774AE] btn overflow-hidden rounded-xl uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-[#FFD100] hover:before:animate-ping transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
           type="submit"
         >
           Send
         </button>
 
 
         
        </div>
      </div>
    
   
    );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


