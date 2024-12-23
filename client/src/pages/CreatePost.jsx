import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { preview } from "../assets";
import FormField, { SelectField } from "../components/FormField";
import { Loader } from "../components";
import { getRandomPrompts } from "../utils";

const CreatePost = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
    size: "256x256",
    model: "dall-e-2",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize name field with currentUser's data
  useEffect(() => {
    console.log(form);

    if (currentUser) {
      setForm((prevForm) => ({
        ...prevForm,
        name: currentUser.displayName || currentUser.email || "",
      }));
    }
  }, [currentUser]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = (e) => {
    e.preventDefault();
    const randomPrompt = getRandomPrompts(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        setLoading(true);

        const response = await fetch(`${import.meta.env.VITE_FIREBASE_BACKEND_API}/api/v1/dalle`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: form.prompt,
            size: form.size,
            model: form.model,
          }),
        });
        const data = await response.json();

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        console.error(error);
      } finally {
        setGeneratingImg(false);
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (form.prompt && form.photo) {
      setLoading(true);
  
      try {
        const response = await fetch(`${import.meta.env.VITE_FIREBASE_BACKEND_API}/api/v1/post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        navigate("/");
      } catch (error) {
        console.log("Error:", error);
        alert(`Something went wrong: ${error.message}`);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter a prompt and Generate an image");
    }
  };
  

  return (
    <section className="max-w-7xl mx-auto mb-24 mt-20">
      <div>
        <h1 className="font-extrabold text-[32px] text-[#222328]">Create</h1>
        <p className="mt-2 max-w-[450px] text-[#666e75] text-[16px]">
          Create imaginative and visually stunning images through DALLE- AI and
          share them with the Community
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-16">
        <div className="flex gap-5 md:flex-row flex-col-reverse">
          <div className="flex-1 space-y-6">
            <FormField
              labelName="Your Name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              handleChange={handleChange}
            />
            <FormField
              labelName="Prompt"
              type="text"
              name="prompt"
              placeholder="A plush toy robot sitting against a yellow wall"
              value={form.prompt}
              handleChange={handleChange}
              isSurpriseMe
              handleSurpriseMe={handleSurpriseMe}
            />

            <div className="flex flex-col md:flex-row gap-6">
              <SelectField
                className="flex-1"
                labelName="Size"
                name="size"
                value={form.size}
                handleChange={handleChange}
                options={[
                  { value: "256x256" },
                  { value: "512x512" },
                  { value: "1024x1024" },
                ]}
              />
              <SelectField
                className="flex-1"
                labelName="Model"
                name="model"
                placeholder="Dalle-2"
                value={form.model}
                handleChange={handleChange}
                options={[{ value: "dall-e-2" }, { value: "dall-e-3" }]}
              />
            </div>

            <div className="mt-5 flex gap-5">
              <button
                type="button"
                onClick={generateImage}
                className="w-full bg-green-700 text-white rounded-lg px-5 py-2.5 sm:w-auto text-sm font-medium text-center">
                {generatingImg ? "Generating..." : "Generate"}
              </button>
            </div>

            <div>
              <p className="mt-5 text-sm font-normal text-[#666e75]">
                <sup>*</sup>Once you have creates the image you want, you can
                share it with others with the Community{" "}
              </p>
              <button
                type="submit"
                className="mt-3 w-full bg-[#6469ff] text-white rounded-lg px-5 py-2.5 sm:w-auto text-sm font-medium text-center">
                {loading ? "Loading..." : "Share with Community"}
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative bg-gray-50 border border-gray-300 rounded-lg max-w-[400px] max-h-[400px] flex justify-center">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-[395px] rounded-lg object-contain"
                />
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  className="w-[400px] object-contain opacity-40"
                />
              )}
              {generatingImg && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
