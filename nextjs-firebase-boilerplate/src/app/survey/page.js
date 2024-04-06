'use client'
import { useRouter } from 'next/navigation';
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import {useState} from "react";
import { cn } from "../utils/cn";


export default function Page() {
    const [ans1, setAns1] = useState("");
    const [ans2, setAns2] = useState("");
    const [ans3, setAns3] = useState("");
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submmitted");
        if(!ans1 || !ans2 || !ans3) return;
        else console.log(ans1 + ans2 + ans3);
    }

    return (
        <div>
        {/* <div className="backdrop-blur-sm  w-full mx-auto rounded-2xl p-4 md:p-8  bg-white"> */}
        <h2 className="font-bold text-xl text-[#2774AE] dark:text-[#2774AE]">
          Mental Questions
        </h2>
        <form className="my-8 bg-white rounded" onSubmit={handleSubmit}>
  
            <Label htmlFor="email" >How would you rate your overall happiness today? (1=worst, 5=best)</Label>
            <div>
            <input type="radio" id="huey" name="a" value="huey"  />
            <label for="huey" class="blue-text">1</label>
            <input type="radio" id="huey" name="a" value="huey"  />
            <label for="huey" class="blue-text">2</label>
            <input type="radio" id="huey" name="a" value="huey"  />
            <label for="huey" class="blue-text">3</label>
            <input type="radio" id="huey" name="a" value="huey"  />
            <label for="huey" class="blue-text">4</label>
            <input type="radio" id="huey" name="a" value="huey"  />
            <label for="huey" class="blue-text">5</label>
            </div>

            <Label htmlFor="email">How would you rate your stress levels today? (1=worst, 5=best)</Label>
          <form/>
          <div>
                <input type="radio" id="huey" name="b" value="huey"  />
                <label for="huey" class="blue-text">1</label>
                <input type="radio" id="huey" name="b" value="huey"  />
                <label for="huey" class="blue-text">2</label>
                <input type="radio" id="huey" name="b" value="huey"  />
                <label for="huey" class="blue-text">3</label>
                <input type="radio" id="huey" name="b" value="huey"  />
                <label for="huey" class="blue-text">4</label>
                <input type="radio" id="huey" name="b" value="huey"  />
                <label for="huey" class="blue-text">5</label>
                </div>

            <Label htmlFor="password">How motivated do you feel today? (1=worst, 5=best)</Label>

          <div>
                <input type="radio" id="huey" name="c" value="huey"  />
                <label for="huey" class="blue-text">1</label>
                <input type="radio" id="huey" name="c" value="huey"  />
                <label for="huey" class="blue-text">2</label>
                <input type="radio" id="huey" name="c" value="huey"  />
                <label for="huey" class="blue-text">3</label>
                <input type="radio" id="huey" name="c" value="huey"  />
                <label for="huey" class="blue-text">4</label>
                <input type="radio" id="huey" name="c" value="huey"  />
                <label for="huey" class="blue-text">5</label>
                </div>


            <Label htmlFor="email">How well do you manage your work-life balance? (1=worst, 5=best)</Label>
            <div>
                <input type="radio" id="huey" name="d" value="huey"  />
                <label for="huey" class="blue-text">1</label>
                <input type="radio" id="huey" name="d" value="huey"  />
                <label for="huey" class="blue-text">2</label>
                <input type="radio" id="huey" name="d" value="huey"  />
                <label for="huey" class="blue-text">3</label>
                <input type="radio" id="huey" name="d" value="huey"  />
                <label for="huey" class="blue-text">4</label>
                <input type="radio" id="huey" name="d" value="huey"  />
                <label for="huey" class="blue-text">5</label>
                </div>



 
            <Label htmlFor="email">How do you feel confident about achieving your study goal? (1=worst, 5=best)
</Label>
         <div>
                <input type="radio" id="huey" name="e" value="huey"  />
                <label for="huey" class="blue-text">1</label>
                <input type="radio" id="huey" name="e" value="huey"  />
                <label for="huey" class="blue-text">2</label>
                <input type="radio" id="huey" name="e" value="huey"  />
                <label for="huey" class="blue-text">3</label>
                <input type="radio" id="huey" name="e" value="huey"  />
                <label for="huey" class="blue-text">4</label>
                <input type="radio" id="huey" name="e" value="huey"  />
                <label for="huey" class="blue-text">5</label>
                </div>

          
        <Label htmlFor="email">Anything you wanna add?</Label>
          <br></br>
         
            <textarea  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder='I also feel myself...' name="Text1" cols="40" rows="5"></textarea>

          <button
            className="relative group/btn w-full text-white h-10 font-bold bg-[#2774AE] btn overflow-hidden rounded-xl uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-orange-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-[#FFD100] hover:before:animate-ping transition-all duration-300 hover:-translate-y-1 transform hover:shadow-md"
            type="submit"
          >
            Send
          </button>
        </form>
    </div>
    //   </div>
    );
}

const LabelInputContainer = ({ children, className }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  