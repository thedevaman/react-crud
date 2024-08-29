import 'remixicon/fonts/remixicon.css'
import {useState} from 'react'
import './App.css'
const App = ()=>{
  const[right,setRight]=useState(-450)
  const handleDrawer = ()=>
  {
   setRight(0)
  }

  return(
    <div style={{
      background:'#ddd',
      minHeight:'100vh'
    }}>
      <div style={{
        width:'70%',
        background:'white',
        margin: '32px auto',
        padding:32
      }}>
      <h1 style={{
        margin:0,
        padding:0,
        textAlign:'center'
      }}>Crud App</h1>
      <button 
      onClick={handleDrawer}
      style={{
        border:'none',
        background:'#8407ba',
        color:'white',
        padding:'14px 24px',
        borderRadius:4,
        fontSize:16,
        margin:'24px 0'
      }}>
        <i className="ri-user-add-line" style={{marginRight:8}}></i>
        New Student</button>
        
        <table className='crud-app'>
          <thead>
            <tr>
              <th>Sr no</th>
              <th>Students Name</th>
              <th>Class</th>
              <th>Roll No</th>
              <th>Dob</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aman</td>
              <td>12</td>
              <td>10</td>
              <td>25/08/1998</td>
              <td>C.S.</td>
              <td>
                <div>
                  <button style={{
                    border:'none',
                    color:'white',
                    borderRadius:4,
                    height:32,
                    width:32,
                    background:'#07c65d',
                    marginRight:12
                  }}><i className="ri-pencil-line"></i></button>
                    <button style={{
                    border:'none',
                    color:'white',
                    borderRadius:4,
                    height:32,
                    width:32,
                    background:'red'
                  }}><i className="ri-delete-bin-line"></i></button>
                </div>
                
              </td>
            </tr>
          
          </tbody>
        </table>



      </div>

      <aside style={{
        position:'fixed',
        top:0,
        right:right,
        width:450,
        background:'white',
        height:'100%',
        boxShadow:'0 0 10px rgba(0,0,0,0.2)',
        padding:32,
        boxSizing:'border-box',
        transition:'0.3s'
      }}>
        <button 
        onClick={()=>setRight(-450)}
        style={{
          border:'none',
          background:'transparent',
          fontSize:18,
          color:'#8407ba',
          position:'absolute',
          top:20,
          right:20
        }}><i className="ri-close-circle-fill"></i></button>
        <h1>My Drawer</h1>
        <form style={{
          display:'flex',
          flexDirection:'column',
          gap:24
        }}>
          <input
          name="fullname"
          type="text"
          placeholder="Enter Your Full Name"
          required
          style={{
            border:'1px solid #ccc',
            padding:16,
            borderRadius:4
          }}
          />
          <input
          name="Class"
          type="number"
          placeholder="Enter Your Class"
          required
          style={{
            border:'1px solid #ccc',
            padding:16,
            borderRadius:4
          }}
          />
          <input
          name="roll"
          type="number"
          placeholder="Enter Your Roll No."
          required
          style={{
            border:'1px solid #ccc',
            padding:16,
            borderRadius:4
          }}
          />
          <input
          name="subject"
          type="text"
          placeholder="Enter Your Subject"
          required
          style={{
            border:'1px solid #ccc',
            padding:16,
            borderRadius:4
          }}
          />
          <input
          name="dob"
          type="date"
          required
          style={{
            border:'1px solid #ccc',
            padding:16,
            borderRadius:4
          }}
          />
          <button
          style={{
            border:'none',
            fontSize:16,
            background:'#8407ba',
            borderRadius:4,
            padding:'14px 0px',
            color:'#fff'
          }}
          >Submit</button>
        </form>
      </aside>

    </div>
  )

}
export default App