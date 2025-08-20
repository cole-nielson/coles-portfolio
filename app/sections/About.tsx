import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"ABOUT ME."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody delay={0.2} text="I'm Cole, a self-taught AI Engineer passionate about building projects that showcase the real-world potential of these technologies. My interest in AI began with the launch of ChatGPT in November 2022, but in February 2025, I decided to pursue this passion professionally." />

                        <AnimatedBody
                            delay={0.4}
                            text="Since then, I've rapidly developed practical skills in AI, automation, and web technologies, entirely through self-guided learning and hands-on experimentation. This portfolio highlights some of my recent projects and reflects my enthusiasm for continuous growth in this exciting and rapidly evolving field."
                        />

                        <AnimatedBody
                            delay={0.6}
                            text="I'm actively seeking opportunities to collaborate, contribute, and further expand my skills and experience in AI and automation."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
