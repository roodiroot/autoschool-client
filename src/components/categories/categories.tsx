"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CatBox from "@/components/categories/cat-box";
import { cn } from "@/lib/utils";
import useScrollElement from "@/hooks/useScrollElement";
import {
  category_descA,
  category_descB,
  description_cat_A,
  description_cat_B,
} from "@/constance";

const Categories: React.FC<{ className: string }> = ({ className }) => {
  const { element } = useScrollElement();
  return (
    <div
      ref={element.categories}
      className={cn(
        "relative w-full max-w-7xl mx-auto px-5",
        "before:absolute before:-z-0 before:rounded-full before:top-[70%] before:right-[-20%] before:border-[30px]  before:border-mgreen/10 before:w-[400px]  before:h-[400px] md:before:right-[-30%] md:before:w-[512px] md:before:h-[512px]",
        className
      )}
    >
      <Tabs defaultValue='cat_a' className='relative z-10 w-full'>
        <TabsList className='grid w-full grid-cols-1 md:grid-cols-2 gap-4 mb-6 sm:mb-14 '>
          <TabsTrigger className='text-2xl' value='cat_a'>
            Категория A
          </TabsTrigger>
          <TabsTrigger className='text-2xl' value='cat_b'>
            Категория B
          </TabsTrigger>
        </TabsList>
        <TabsContent value='cat_a' className=''>
          <CatBox
            list={category_descA}
            title='Расписание ближайших занятий на обучениее категории "A"'
            description={description_cat_A}
          />
        </TabsContent>
        <TabsContent value='cat_b' className='flex gap-5'>
          <CatBox
            list={category_descB}
            title='Расписание ближайших занятий на обучениее категории "B"'
            description={description_cat_B}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Categories;
