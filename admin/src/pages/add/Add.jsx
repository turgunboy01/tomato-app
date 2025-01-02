import React from "react";
import { assets } from "../../admin_assets/assets";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:4000";

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(`${url}/api/food/add`, formData);

    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  console.log(data);

  return (
    <div className="w-[70%] mt-14 ml-[max(5vw,25px)] text-[16px] text-[#6d6d6d]">
      <form className="flex flex-col  gap-6" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-4">
          <p className="">Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              className="w-[120px]"
              alt=""
            />
          </label>
          <input
            type="file"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            required
          />
        </div>
        <div className="w-[max(40%,280px)] flex flex-col gap-4">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            placeholder="Type here"
            className="p-2.5 border rounded-[4px]"
          />
        </div>
        <div className="w-[max(40%,280px)] flex flex-col gap-4">
          <p>Product Description</p>
          <textarea
            className="p-2.5 border rounded-[4px]"
            rows="6"
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            placeholder="Write content here"
          />
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-4 ">
            <p>Product Category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              className="p-2.5 max-w-[120px] border rounded-[4px]"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <p>Product Price</p>
            <input
              type="number"
              className="p-2.5 max-w-[120px] border rounded-[4px]"
              name="price"
              placeholder="$10 "
              onChange={onChangeHandler}
              value={data.price}
            />
          </div>
        </div>
        <button
          type="submit"
          className="max-w-[120px] border-none p-2.5 bg-black text-white cursor-pointer "
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
