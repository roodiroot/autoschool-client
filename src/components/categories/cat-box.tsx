"use client";

import { DescriptionCatType, DescriptionCategoryType } from "@/types";
import CategoryForm from "@/components/categories/category-form";
import CatLine from "@/components/categories/cat-line";

const CatBox: React.FC<{
  list: DescriptionCategoryType[];
  title: string;
  description: DescriptionCatType;
}> = ({ list, title, description }) => {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-5 w-full'>
      <div className='flex flex-col w-full lg:max-w-[380px] gap-12'>
        <div className='rounded-3.5xl bg-mgreen shadow-m text-mwhite py-6 px-6 sm:py-9 sm:px-12'>
          <h2 className='font-bold text-2xl uppercase mb-3'>
            {description.title}
          </h2>
          <p className=''>{description.description}</p>
        </div>
        <CategoryForm />
      </div>
      <div className='flex-1 '>
        <div className='rounded-3.5xl  shadow-m py-6 px-6 text-slate-950 sm:py-9 sm:px-12'>
          <h2 className=' mb-9 max-w-[400px] sm:text-xl'>{title}</h2>
          <ul className='text-sm font-light space-y-9 sm:text-lg sm:space-y-6'>
            {list.map((i: DescriptionCategoryType) => (
              <CatLine title={i.title} description={i.description} key={i.id} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CatBox;
