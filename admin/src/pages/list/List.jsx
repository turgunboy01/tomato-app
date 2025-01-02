import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);
  const url = "http://localhost:4000";
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  console.log(list.length);

  return (
    <div className="mt-5 mx-4 sm:mx-[max(1vw,50px)] w-full text-[15px]">
      {!list.length > 0 ? (
        <>
          {" "}
          <p className="text-[20px] font-medium py-3">No Products</p>
        </>
      ) : (
        <>
          <p className="text-[20px] font-medium py-3">All Foods List</p>
          <div className="border">
            <div className="grid grid-cols-5 gap-5 items-center py-3 px-4 border ">
              <b>Image</b>
              <b>Name</b>
              <b>Category</b>
              <b>Price</b>
              <b>Action</b>
            </div>
            {list.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-5 gap-5 py-3 px-4 border  items-center"
                >
                  <img
                    src={`${url}/images/` + item.image}
                    alt=""
                    className="w-[80px] h-[60px] object-cover"
                  />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>${item.price}</p>
                  <p
                    className="cursor-pointer text-[13px] pl-4 font-semibold"
                    onClick={() => removeFood(item._id)}
                  >
                    x
                  </p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
