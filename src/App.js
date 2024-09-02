import 'remixicon/fonts/remixicon.css'
import {useState} from 'react'
import './App.css'
const App = ()=>{
  const model ={
    fullname:'',
    class:'',
    roll:'',
    subject:'',
    dob:'',
 }
  const[right,setRight]=useState(-450)
  const[student,setStudent] = useState([])
  const[editIndex,setEditIndex] = useState(null)
  const[form,setForm]=useState(model) 
  const handleDrawer = ()=>
  {
   setRight(0)
  }
  const handleInput =(e)=>{
    const input = e.target
    const value = input.value
    const key = input.name
    setForm({
      ...form,
      [key]:value
    })

  }

  const createStudent= (e)=>{
    e.preventDefault()
    console.log(form)
   setStudent([
    ...student,
    form
   ])
   setForm(model)
   setRight(-450)
  }

  const deleteStudent=(index)=>{
const backup = [...student]
backup.splice(index,1)
setStudent(backup)

  }

  const editStudent = (index)=>{
    setRight(0)
    setForm(student[index])
    setEditIndex(index)
  }

  const saveStudent= (e)=>{
    e.preventDefault()
    const backupedit = [...student]
    backupedit[editIndex] = form
    setStudent(backupedit)
    setForm(model)
    setEditIndex(null)
    setRight(-450)
  }
  const closeDrawer= ()=>{
    setRight(-450)
    setEditIndex(null)
    setForm(model)
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
            {
             student.map((item,index)=>(
 <tr>
              <td>{index+1}</td>
              <td>{item.fullname}</td>
              <td>{item.class}</td>
              <td>{item.roll}</td>
              <td>{item.dob}</td>
              <td>{item.subject}</td>
              <td>
                <div>
                  <button 
                  onClick={()=>editStudent(index)}
                  style={{
                    border:'none',
                    color:'white',
                    borderRadius:4,
                    height:32,
                    width:32,
                    background:'#07c65d',
                    marginRight:12
                  }}><i className="ri-pencil-line"></i></button>
                    <button 
                    onClick={()=>deleteStudent(index)}
                    style={{
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

             ))


            }
           
          
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
        onClick={closeDrawer}
        style={{
          border:'none',
          background:'transparent',
          fontSize:18,
          color:'#8407ba',
          position:'absolute',
          top:20,
          right:20
        }}><i className="ri-close-circle-fill"></i></button>
        <h1> {editIndex===null?'New Student':'Edit Student'}</h1>
       
        <form 
        onSubmit={editIndex===null?createStudent:saveStudent}
        style={{
          display:'flex',
          flexDirection:'column',
          gap:24
        }}>
          <input
          value={form.fullname}
          onChange={handleInput}
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
          value={form.class}
           onChange={handleInput}
          name="class"
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
          value={form.roll}
           onChange={handleInput}
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
          value={form.subject}
           onChange={handleInput}
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
           onChange={handleInput}
           value={form.dob}
          name="dob"
          type="date"
          required
          style={{
            border:'1px solid #ccc',
            padding:16,
            borderRadius:4
          }}
          />
          {
            editIndex===null?
        
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
           :
          <button
          style={{
            border:'none',
            fontSize:16,
            background:'deeppink',
            borderRadius:4,
            padding:'14px 0px',
            color:'#fff'
          }}
          >Save</button>
        }
        </form>
      </aside>

    </div>
  )

}
export default App