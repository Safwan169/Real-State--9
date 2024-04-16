import React, { useContext } from 'react';
import { updateProfile } from 'firebase/auth';
import { myContext } from './All';
import { auth } from './firebase.config';
import toast from 'react-hot-toast';

const Update = () => {
    const info = useContext(myContext)
    const { createUser,setDep2 ,dep2} = info
    const handleUpdate=e=>{
        e.preventDefault();
        const Name=e.target.name.value;
        const photoURL=e.target.photoURL.value;
        // createUser()
        // .then(()=>{
            console.log(Name,photoURL)
            updateProfile(auth.currentUser, {
                displayName: `${Name}`, photoURL: `${photoURL}`

              }).then((e) => {
                // Profile updated!
                console.log('update hoisa',e)
            setDep2(!dep2)

            //  setUser(user)
            toast.success('You have successfully Updated',{
                position:'top-center',
                style:{
                    marginTop:'80px',
                marginLeft:'70px',

                border:'1px solid green',

                
            }})
    
                
                // ...
            //   }).catch((error) => {
            //     // An error occurred
            //     // ...
            //     // setLoading(false)
            //   }); 
            
        })
      

    }
  
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="url" name='photoURL' placeholder="PhotoURL" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Update;