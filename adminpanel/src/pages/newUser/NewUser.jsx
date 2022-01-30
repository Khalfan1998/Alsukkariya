import "./newUser.css"

export default function NewUser() {
  return <div className="newUser">
     <h1 className="newUserTitle">New user</h1>
     <form  className="newUserForm">
         <div className="newUserItem">
             <label>Username</label>
             <input type="text" placeholder="jack" />
         </div>
         <div className="newUserItem">
             <label>Full Name</label>
             <input type="text" placeholder="Jack Davis" />
         </div>
         <div className="newUserItem">
             <label>Email</label>
             <input type="email" placeholder="jackdavis@gmail.com" />
         </div>
         <div className="newUserItem">
             <label>Password</label>
             <input type="password" placeholder="password" />
         </div>
         <div className="newUserItem">
             <label>Phone</label>
             <input type="email" placeholder="+9733931238" />
         </div>
         <div className="newUserItem">
             <label>Address</label>
             <input type="email" placeholder="House 11 | Area 22 | Manama" />
         </div>
         <div className="newUserItem">
            <label> Active </label>
            <select className="newUserSelect" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
         </div>
         <button className="newUserButton">Create</button>
     </form>
  </div>;
}
