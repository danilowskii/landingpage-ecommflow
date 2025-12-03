import Compare from "../Compare";
import antes1 from "../../assets/antes.png";
import depois1 from "../../assets/depois.png";
import antes2 from "../../assets/antes2.png";
import depois2 from "../../assets/depois2.png";

export function CompareDemo() {
  return (
    <div className="p-4 border flex flex-wrap justify-center gap-14 rounded-3xl px-4">
      <Compare
        firstImage={antes1}
        secondImage={depois1}
        firstImageClassName="object-cover object-center"
        secondImageClassname="object-cover object-center"
        className="h-[250px] w-[250px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
      <Compare
        firstImage={antes2}
        secondImage={depois2}
        firstImageClassName="object-cover object-center"
        secondImageClassname="object-cover object-center"
        className="h-[250px] w-[250px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
      />
    </div>
  );
}
