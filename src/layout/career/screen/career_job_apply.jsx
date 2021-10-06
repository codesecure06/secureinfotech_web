import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import Footer from "../../_components/footer";
import Navbar from "../../_components/nav";
import { useParams, useHistory } from "react-router-dom";
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
import { toast } from "react-toastify";
import firebaseConfig from "../../../auth/fire";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const CareerJobApply = () => {
  const history = useHistory();
  const { jobtitle } = useParams();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    desc: "",
  });
  const [file, setFile] = useState();
  // const [fileUpload, setFileUpload] = useState("");
  const [disable, setDisable] = useState(false);

  // useEffect(() => {
  //   console.log(jobtitle)
  // }, [])

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

  const handleUpload = () => {
    // let fileURL;
    const storageRef = ref(storage, "images/" + Math.floor(new Date().getTime() / 1000));
    const uploadTask = uploadBytesResumable(storageRef, file);
    // console.log(file);
    uploadTask.on(
      "state_changed",
      // (snapshot) => {
      //   const progress =
      //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //   console.log("Upload is " + progress + "% done", snapshot.state);
      //   switch (snapshot.state) {
      //     case "paused":
      //       break;
      //     case "running":
      //       break;
      //   }
      // },
      // (error) => {
      //   switch (error.code) {
      //     case "storage/unauthorized":
      //       break;
      //     case "storage/canceled":
      //       break;
      //     case "storage/unknown":
      //       break;
      //   }
      // },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          // setFileUpload(downloadURL)
          handleSubmit(downloadURL);
        });
      }
    );
  };

  const handleSubmit = async (imgURL) => {
    // if (checkDoc)
    setDisable(true);
    const { fname, lname, mobile, email, desc } = formData;
    if (!fname || !lname || !mobile || !email || !desc || !file) {
      toast.error("All field required!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      setDisable(false);
    } else {
      // const q = query(
      //   collection(db, "apply"),
      //   where("email", "==", email)
      // );

      // onSnapshot(q, async (snapshot) => {
      //   let rec;
      //   snapshot.forEach((userSnapshot) => {
      //     rec = userSnapshot.id;
      //   });
      // console.log("pp>", rec);
      // if (!rec) {
      // await handleUpload()
      //  await handleUpload()

      // console.log("ff", fileUpload)
      const docs = doc(collection(db, "apply"));
      setDoc(docs, {
        fname: fname.toLowerCase(),
        lname: lname.toLowerCase(),
        email: email.toLowerCase(),
        desc: desc.toLowerCase(),
        mobile: "+91" + mobile,
        title: jobtitle,
        fileURL: imgURL,
      })
        .then(() => {
          history.push("/career");
          toast.success("Successfully Added.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
          });
          // setFormData({
          //   fname: "",
          //   lname: "",
          //   mobile: "",
          //   email: "",
          //   desc: "",
          // });
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
      // }
      //  else {
      //   toast.error("Already Submitted.", {
      //     position: "top-right",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: false,
      //     draggable: true,
      //   });
      // }
      // });
    }
  };

  return (
    <div>
      <Navbar />
      {/* <CareerHeader /> */}
      <div className="container-fluid current-opening-main pt-5">
        <div className="container py-5">
          <div className="content-title my-3">
            <span>Current Openings</span>
          </div>
          <div className="content-tagline my-3">
            <span>What's your expertise? See where do you fit in.</span>
          </div>
          <div className="carrer-form p-4 mt-5">
            <div
              className="d-flex align-items-center career-all-job"
              onClick={() => {
                history.goBack();
              }}
            >
              <span>
                <svg width="25" height="25">
                  <BsArrowLeftShort
                    size="22px"
                    style={{ fill: "url(#blue-gradient)" }}
                  />
                  <linearGradient
                    id="blue-gradient"
                    x1="100%"
                    y1="100%"
                    x2="0%"
                    y2="0%"
                  >
                    <stop stopColor="#00a7ff" offset="0%" />
                    <stop stopColor="#0080ff" offset="100%" />
                  </linearGradient>
                </svg>
              </span>
              <span>All Job openings</span>
            </div>
            <div className="career-job-tag my-2">
              <span>Apply For this job</span>
            </div>
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
                  <input
                    type="text"
                    className="career-job-input w-100 py-3 px-3"
                    placeholder="Links to your portfolio"
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="career-job-upload" data-aos="fade-down">
              <label htmlFor="file-upload" className="px-5 py-2">
                Upload CV
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0])
                  console.log(e.target.files[0])
                }}
              />
            </div>

            <div className="career-job-submit my-5">
              <button
                className="px-5 py-2 rounded-pill"
                disabled={disable}
                onClick={handleUpload}
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareerJobApply;
