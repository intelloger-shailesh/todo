import React from 'react';
import './styles.css';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            task:[],
            currentTask:{
                text:'',
                key:'',
            },
            status:false
        }
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.strikeLine = this.strikeLine.bind(this);
    }

    addTask(event){
        event.preventDefault();
        const newItem = this.state.currentTask;
        if(newItem.text !==""){
            const items = [...this.state.task];
            items.unshift(newItem);
            this.setState({
                task: items,
                currentTask:{
                    text:'',
                    key:''
                },
                completed: {
                    0: true,
                    1: false,
                }
            })
        }
    }

    editTask(text,key) {
        const items = this.state.task;
        this.setState({
            task: items.filter(item => item.key !== key),
            currentTask: {
                text
            }
        });
    }

    deleteTask(key){
        const currentTaskArray = [...this.state.task]
        const taskAfterDeleted = currentTaskArray.filter(deletedTask => deletedTask.key !== key);
        this.setState({
            task:taskAfterDeleted
        })
    }

    strikeLine(key,event){
        
        
              
    };

    handleInput(event){
        let index;
        if ([...this.state.task].length === 0) {
            index = 0;
        } else {
            index = [...this.state.task].length;
        }
        this.setState({
            currentTask: {
                text: event.target.value,
                key: index
            }
        });
    }
    render(){
        return(
            <div className="Todo">
                <h2> REACT TODO APP </h2>
                <form id="todo-list" onSubmit={this.addTask}>
                    <input type="text" className="textInput" placeholder="Enter Item" value={this.state.currentTask.text} onChange={this.handleInput}/>
                    <button type="submit">Add</button>
                </form>
                <div>
                    <div className="container" >
                        {this.state.task.map(oneTask=>(
                             <table width="40%" id="tblTasks">
                                <tr>
                                    <td width="50%" height="50px"><div id={oneTask.key}>{oneTask.text}</div></td>
                                    <td width="10%" height="50px"><button id={"btnEdit"} onClick={() => this.editTask(oneTask.text, oneTask.key)}>Edit</button></td>
                                     <td class width="10%" height="50px"><button id="btnDone" onClick={() => this.strikeLine(oneTask.key)}>Done</button></td>
                                    <td width="10%" height="50px"><button id="btnDelete"  onClick={() => this.deleteTask(oneTask.key)}>Delete</button></td>
                                </tr>
                             </table>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
export default App;




