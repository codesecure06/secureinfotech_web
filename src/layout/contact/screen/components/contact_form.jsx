import React, { useState } from "react";
import AOS from "aos";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  // getDoc,
  // collectionGroup,
  // query,
  // getDocs,
  // where,
  // onSnapshot,
} from "firebase/firestore";
import firebaseConfig from "../../../../auth/fire";
import { toast } from "react-toastify";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

AOS.init();

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    desc: "",
  });

  // const ref = fire..collection('users')
  // console.log(ref)

  const handleChange = (e) => {
    let { name, value } = e.target;
    let regEx = /^[0-9]*$/;
    if (name === "mobile") {
      if (value.length <= 10 && regEx.test(value)) {
        setFormData({
          ...formData,
          mobile: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async () => {
    // if (checkDoc)
    const { fname, lname, mobile, email, desc } = formData;
    if (!fname || !lname || !mobile || !email || !desc) {
      toast.error("All field required!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    } else {
      // const q = query(collection(db, "users"), where("email", "==", "avcx@dsf"));

      // onSnapshot(q, (snapshot) => {
      //   let rec;
      //   snapshot.forEach((userSnapshot) => {
      //     rec = userSnapshot.id;
      //   });
      //   console.log("pp>", rec);
      //   if (!rec) {}
      const docs = doc(collection(db, "users"));
      await setDoc(docs, {
        fname: fname.toLowerCase(),
        lname: lname.toLowerCase(),
        email: email.toLowerCase(),
        desc: desc.toLowerCase(),
        mobile: "+91" + mobile,
      })
        .then(() => {
          toast.success("Successfully Added.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
          setFormData({
            fname: "",
            lname: "",
            mobile: "",
            email: "",
            desc: "",
          });
        })
        .catch(() => {
          toast.error("Failed.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
        });
      // });
    }
  };

  return (
    <div className="container-fluid current-opening-main">
      <div className="container py-5">
        <div className="content-title my-3">
          <span>Get In Touch</span>
        </div>
        <div className="content-tagline my-3">
          <span>What's your expertise? See where do you fit in.</span>
        </div>
        <div className="carrer-form p-4 mt-5">
          <div className="py-3">
            <div className="row justify-content-between career-job-form-input">
              <div className="col-md-6 my-3" data-aos="fade-up-left">
                <input
                  type="text"
                  className="career-job-input w-100 py-3 px-3"
                  placeholder="First Name"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 my-3" data-aos="fade-up-right">
                <input
                  type="text"
                  className="career-job-input w-100 py-3 px-3"
                  placeholder="Last Name"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-between career-job-form-input">
              <div className="col-md-6 my-3" data-aos="fade-left">
                <input
                  type="text"
                  className="career-job-input w-100 py-3 px-3"
                  placeholder="Mobile Phone"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 my-3" data-aos="fade-right">
                <input
                  type="text"
                  className="career-job-input w-100 py-3 px-3"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row justify-content-between career-job-form-input">
              <div className="col-md-12 my-3" data-aos="fade-down">
                <textarea
                  type="text"
                  className="career-job-input-area w-100 py-3 px-3"
                  placeholder="Description"
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="career-job-submit my-5 d-flex justify-content-center">
            <button className="px-5 py-2 rounded-pill" onClick={handleSubmit}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
