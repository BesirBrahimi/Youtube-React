import React, { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { useParams } from "react-router-dom";

interface Comment {
  id: string | undefined;
  text: string;
  user: string;
  timestamp: string;
  image: string;
}

const Comments = () => {
  const { id } = useParams();

  const [inputComment, setInputComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState("");
  const [userImage, setUserImage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const storageKey = `comments_${id}`;



  useEffect(() => {
    const storedComments = localStorage.getItem(storageKey);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);


  const handleSubmitComment = () => {
    if (!username || !inputComment || !userImage) {
      alert("Please fill in all required fields");
      return;
    }
    const newComment = {
      id: id,
      text: inputComment,
      user: username,
      timestamp: new Date().toLocaleString(),
      image: userImage,
    };
    setComments([newComment, ...comments]);
    localStorage.setItem(storageKey, JSON.stringify([newComment, ...comments]));
    setInputComment("");
    setUsername("");
    setUserImage("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;
      setUserImage(result);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteComment = (indexToDelete: number) => {
    const updatedComments = [...comments];
    updatedComments.splice(indexToDelete, 1);
    setComments(updatedComments);
    localStorage.setItem(storageKey, JSON.stringify(updatedComments));
  };
  

  return (
    <div className="flex flex-col my-2">
      <div className="flex sm:w-[100%] md:w-[90%] border-2 p-4 rounded-lg">
        <p className="sm:w-[13%] md:w-[7%]">
          <CgProfile className="text-4xl" />
        </p>
        <div className="flex flex-col w-[82%]">
          <input
            type="text"
            placeholder="Your name"
            className="focus:border-b-2 focus:border-black p-2 focus:outline-none focus:ring-0 border-b-2 w-[99%] mb-2 bg-transparent"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add a comment"
            className="focus:border-b-2 focus:border-black p-2 focus:outline-none focus:ring-0 border-b-2 w-[99%] my-2 bg-transparent"
            value={inputComment}
            required
            onChange={(e) => setInputComment(e.target.value)}
          />
          <input
            type="file"
            placeholder="Image URL"
            ref={fileInputRef}
            required
            className="block w-full text-sm my-2 text-slate-500
           file:mr-4 file:py-2 file:px-4
           file:rounded-full file:border-0
           file:text-sm file:font-semibold
          file:bg-violet-50 file:text-violet-700
          hover:file:bg-violet-100 cursor-pointer
           "
            onChange={handleFileUpload}
          />
          <button
            className="w-[40%] rounded-lg p-1 bg-sky-500 hover:bg-sky-700 text-white my-2"
            onClick={handleSubmitComment}
          >
            Comment
          </button>
        </div>
      </div>
      {comments.length > 0 && (
        <div className="w-full mt-4">
          {comments
            .filter((comment) => comment.id === id)
            .map((comment, index) => (
              <div className="flex items-center my-3" key={index}>
                <div className="w-[80%]">
                    <div className="flex items-center my-3">
                      {comment.image && (
                        <img
                          src={comment.image}
                          className="w-[60px] h-[60px] rounded-full mr-4 object-cover"
                          alt="User"
                        />
                      )}
                      <div className="w-[80%]">
                        <div className="flex items-center">
                          <p className="text-2xl mr-1 overflow-hidden overflow-ellipsis whitespace-break-spaces">
                            @{comment.user}
                          </p>
                          <p className="text-sm ml-1">{comment.timestamp}</p>
                        </div>
                        <p className="overflow-hidden overflow-ellipsis whitespace-break-spaces">
                          {comment.text}
                        </p>
                      </div>
                    </div>
                </div>
                <div className="flex sm:flex-col ml-2 md:flex-row">
                  <button
                    className="rounded-lg p-1 bg-red-500 hover:bg-red-700 text-white my-2"
                    onClick={() => handleDeleteComment(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Comments;



// import React, { useState, useRef, useEffect } from "react";
// import { CgProfile } from "react-icons/cg";
// import { useParams } from "react-router-dom";

// interface Comment {
//   id: string | undefined;
//   text: string;
//   user: string;
//   timestamp: string;
//   image: string;
// }

// const Comments = () => {
//   const { id } = useParams();

//   const [inputComment, setInputComment] = useState<string>("");
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [username, setUsername] = useState("");
//   const [userImage, setUserImage] = useState("");
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [editMode, setEditMode] = useState<boolean>(false);
//   const [editedComment, setEditedComment] = useState<string>("");
//   const [editedIndex, setEditedIndex] = useState<number>(-1);

//   // Retrieve comments from local storage when component mounts
// useEffect(() => {
//   const storedComments = localStorage.getItem('comments');
//   if (storedComments) {
//     setComments(JSON.parse(storedComments));
//   }
// }, []);

//   const handleSubmitComment = () => {
//     if (!username || !inputComment || !userImage) {
//       alert("Please fill in all required fields");
//       return;
//     }
//     const newComment = {
//       id: id,
//       text: inputComment,
//       user: username,
//       timestamp: new Date().toLocaleString(),
//       image: userImage,
//     };
//     setComments([newComment, ...comments]);
//     localStorage.setItem("comments", JSON.stringify([newComment, ...comments]));
//     setInputComment("");
//     setUsername("");
//     setUserImage("");
//   };

//   const handleEditComment = (index: number) => {
//     setEditedComment(comments[index].text);
//     setEditedIndex(index);
//     setEditMode(true);
//   };

//   const handleUpdateComment = () => {
//     const updatedComments = [...comments];
//     updatedComments[editedIndex].text = editedComment;
//     setComments(updatedComments);
//     localStorage.setItem("comments", JSON.stringify(updatedComments));
//     setEditMode(false);
//     setEditedComment("");
//     setEditedIndex(-1);
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       const result = reader.result as string;
//       setUserImage(result);
//       if (fileInputRef.current) {
//         fileInputRef.current.value = "";
//       }
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteComment = (indexToDelete: number) => {
//     const updatedComments = [...comments];
//     updatedComments.splice(indexToDelete, 1);
//     setComments(updatedComments);
//     localStorage.setItem("comments", JSON.stringify(updatedComments));
//   };

//   return (
//     <div className="flex flex-col my-2">
//       <div className="flex sm:w-[100%] md:w-[90%] border-2 p-4 rounded-lg">
//         <p className="sm:w-[13%] md:w-[7%]">
//           <CgProfile className="text-4xl" />
//         </p>
//         <div className="flex flex-col w-[82%]">
//           <input
//             type="text"
//             placeholder="Your name"
//             className="focus:border-b-2 focus:border-black p-2 focus:outline-none focus:ring-0 border-b-2 w-[99%] mb-2"
//             value={username}
//             required
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Add a comment"
//             className="focus:border-b-2 focus:border-black p-2 focus:outline-none focus:ring-0 border-b-2 w-[99%] my-2"
//             value={inputComment}
//             required
//             onChange={(e) => setInputComment(e.target.value)}
//           />
//           <input
//             type="file"
//             placeholder="Image URL"
//             ref={fileInputRef}
//             required
//             className="block w-full text-sm my-2 text-slate-500
//            file:mr-4 file:py-2 file:px-4
//            file:rounded-full file:border-0
//            file:text-sm file:font-semibold
//           file:bg-violet-50 file:text-violet-700
//           hover:file:bg-violet-100 cursor-pointer
//            "
//             onChange={handleFileUpload}
//           />
//           <button
//             className="w-[40%] rounded-lg p-1 bg-sky-500 hover:bg-sky-700 text-white my-2"
//             onClick={handleSubmitComment}
//           >
//             Comment
//           </button>
//         </div>
//       </div>
//       {comments.length > 0 && (
//         <div className="w-full mt-4">
//           {comments.filter((comment) => comment.id === id).map((comment, index) => (
//             <div className="flex items-center my-3" key={index}>
//               <div className="w-[80%]">
//                 {editMode && editedIndex === index ? (
//                   <div className="flex items-center my-3">
//                     {comment.image && (
//                       <img
//                         src={comment.image}
//                         className="w-[60px] h-[60px] rounded-full mr-4 object-cover"
//                         alt="User"
//                       />
//                     )}
//                     <div>
//                         <p className="text-2xl w-[45%] mr-1 overflow-hidden overflow-ellipsis whitespace-break-spaces">@{comment.user}</p>
//                       <input
//                         type="text"
//                         className="sm:w-[55%] md:w-[95%] focus:border-b-2  overflow-hidden overflow-ellipsis whitespace-break-spaces focus:border-black p-2 focus:outline-none focus:ring-0 border-b-2  my-2"
//                         value={editedComment}
//                         onChange={(e) => setEditedComment(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="flex items-center my-3">
//                     {comment.image && (
//                       <img
//                         src={comment.image}
//                         className="w-[60px] h-[60px] rounded-full mr-4 object-cover"
//                         alt="User"
//                       />
//                     )}
//                     <div className="w-[80%]">
//                       <div className="flex items-center">
//                         <p className="text-2xl mr-1 overflow-hidden overflow-ellipsis whitespace-break-spaces">@{comment.user}</p>
//                         <p className="text-sm ml-1">{comment.timestamp}</p>
//                       </div>
//                       <p className="overflow-hidden overflow-ellipsis whitespace-break-spaces">
//                         {comment.text}
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div className="flex sm:flex-col ml-2 md:flex-row">
//               <button
//                 className="rounded-lg p-1 bg-red-500 hover:bg-red-700 text-white my-2"
//                 onClick={() => handleDeleteComment(index)}
//               >
//                 Delete
//               </button>
//               {editMode && editedIndex === index ? (
//                 <button
//                   className="rounded-lg p-1 bg-sky-500 hover:bg-sky-700 text-white my-2 ml-2"
//                   onClick={handleUpdateComment}
//                 >
//                   Update
//                 </button>
//               ) : (
//                 <button
//                   className="rounded-lg p-1 bg-sky-500 hover:bg-sky-700 text-white my-2 ml-2"
//                   onClick={() => handleEditComment(index)}
//                 >
//                   Edit
//                 </button>
//               )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Comments;
