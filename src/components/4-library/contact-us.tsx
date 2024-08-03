import oxfordMap from "@/assets/oxford-michigan.png";

export function ContactUs() {
    return (
        <section>
            <div>
                <h1>Get in Touch</h1>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Email</p>
                <p>Sumbit</p>
            </div>
        </section>
    );
}

// export function ContactU() {
//     const [result, setResult] = React.useState("");
  
//     const onSubmit = async (event: any) => {
//       event.preventDefault();
//       setResult("Sending....");
//       const formData = new FormData(event.target);
  
//       formData.append("access_key", "a04f96ee-90d4-419a-98a1-81e984f2f3de");
  
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       }).then((res) => res.json());
  
//       if (res.success) {
//         console.log("Success", res);
//         setResult(res.message);
//       } else {
//         console.log("Error", res);
//         setResult(res.message);
//       }
//     };
  
//     return (
//       <div className="bg-slate-50">
//         <h1>React File Upload Form</h1>
//         <form className="flex flex-col gap-y-1" onSubmit={onSubmit}>
//           <input type="text" name="name"/>
//           <input type="email" name="email"/>
//           <textarea name="message"></textarea>
//           <input type="submit" />
//         </form>
//         <span>{result}</span>
//       </div>
//     );
//   }