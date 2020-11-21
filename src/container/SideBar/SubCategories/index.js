import React from "react";

const RadioCheck = ({ value, index, setSubCategories }) => {
  return (
    <div class="flex items-center">
      <input
        id="push_everything2"
        name="push_notifications2"
        type="radio"
        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
        onClick={()=>{setSubCategories(index); console.log("subCat", index)}}
      />
      <label
        for="push_everything2"
        class="ml-3 block text-sm font-medium text-gray-700"
      >
        {value}
      </label>
    </div>
  );
};

const SubCategories = ({ data: { subcategories }, setSubCategories }) => {
  return (
    <fieldset class="pb-4">
      <div>
        <legend class="text-base font-semibold text-gray-900">
          ประเภทร้านค้า
        </legend>
      </div>
      <div class="mt-2 space-y-2">
        <RadioCheck value={"ทั้งหมด"} index={-1} setSubCategories={setSubCategories} />
        {subcategories.map((value, index) => (
          <RadioCheck
            value={value}
            index={index + 1}
            setSubCategories={setSubCategories}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default SubCategories;
