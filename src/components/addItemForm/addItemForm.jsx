
"use client"

import { useForm } from "react-hook-form"


const AddItemForm = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const handleSubmitForm = (data) => {
    console.log(data);

    const randomNumber = (min, max) => {
      return Math.random() * (max - min) + min;
    }

    const id = randomNumber(10, 1000)

    const submitData = {
      Id : id , 
      Name : data.name,
      Price : data.price,
      ImageUrl : data.imageUrl,
      IsPopular : data.IsPopular === "true" ? 1 : 0,
      IsRecommended : data.IsRecommended === "true" ? 1 : 0
    }

    console.log(submitData);


  }


  return (
    <div className="w-full">
      <div className='text-xl capitalize'>
        add Item
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="w-full">
            <div className="text-sm mt-2">{errors.name && <span>please enter your name</span>}</div>
            <input
              type="text"
              className="w-full rounded-full text-sm py-1 border mt-2 px-3 border-text__color__primary focus:outline-background__color__secondary"
              placeholder="enter name"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          <div className="w-full">
            <div className="text-sm mt-2">{errors.price && <span>please enter product price in number</span>}</div>
            <input
              type="number"
              className="w-full rounded-full text-sm py-1 border mt-2 px-3 border-text__color__primary focus:outline-background__color__secondary"
              placeholder="enter price"
              {...register("price", {
                required: true,
              })}
            />
          </div>
          <div className="w-full">
            <div className="text-sm mt-2">{errors.imageUrl && <span>please enter your product image url</span>}</div>
            <input
              type="text"
              className="w-full rounded-full text-sm py-1 border mt-2 px-3 border-text__color__primary focus:outline-background__color__secondary"
              placeholder="enter imageUrl"
              {...register("imageUrl", {
                required: true,
              })}
            />
          </div>
          <div className="w-full">
            <div className="text-sm mt-2"><span>is your product popular?</span></div>

            <select
              className="w-full rounded-full text-sm py-1 border mt-2 px-3 border-text__color__primary focus:outline-background__color__secondary"
              {...register("IsPopular", {
                required: true,
              })}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="w-full">
            <div className="text-sm mt-2"><span>is your product recomended?</span></div>

            <select
              className="w-full rounded-full text-sm py-1 border mt-2 px-3 border-text__color__primary focus:outline-background__color__secondary"
              {...register("IsRecommended", {
                required: true,
              })}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div>
            <button className="bg-background__color__primary text-white w-full mt-[20px] rounded-lg py-2" type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddItemForm