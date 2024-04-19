import React from "react";

const MultipleChoice = ({setAns, id}) => {

    const val = "shrink-0 bg-black rounded-full h-[25px] w-[25px]";

    return (  
        <div class="flex gap-5 mt-4 max-md:flex-wrap max-md:pr-5">
        <div>
          <input type="radio" name={id} className={val} onClick={(e) => setAns('1')} />
          <div class="text-center"><label>1</label></div>
        </div>
        <div>
          <input type="radio" name={id} className={val} onClick={(e) => setAns('2')} />
          <div class="text-center"><label>2</label></div>
        </div>
        <div>
          <input type="radio" name={id} className={val} onClick={(e) => setAns('3')}/>
          <div class="text-center"><label>3</label></div>
        </div>
        <div>
          <input type="radio" name={id} className={val} onClick={(e) => setAns('4')}/>
          <div class="text-center"><label>4</label></div>
        </div>
        <div>
          <input type="radio" name={id} className={val} onClick={(e) => setAns('5')}/>
          <div class="text-center"><label>5</label></div>
        </div>
      </div>
    );
}

export default MultipleChoice;