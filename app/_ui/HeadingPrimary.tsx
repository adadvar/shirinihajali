const HeadingPrimary = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="font-bold text-[#333] tracking-[-0.5px] text-[5.2rem] leading-[1.2] mb-[3.2rem]">
      {children}
    </h1>
  );
};

export default HeadingPrimary;
