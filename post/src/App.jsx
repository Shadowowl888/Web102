import './App.css'
import Post from './components/Post';
import Prom from './components/Prom';

function App() {
  const students = [
    {
      name: 'Bob',
      description: 'Lorem ipsum',
      likes: '102'
    },
    {
      name: 'Taylor Swift',
      description: 'Lorem ipsum',
      likes: '13'
    },
    {
      name: 'Travis Kelce',
      description: 'Lorem ipsum',
      likes: '87'
    }
  ];
  
  const name = 'Devin Khun';
  const description = 'I want to become a software engineer!';
  const likes = '17';
  
  return (
    <>
      <h1>Welcome to Web102 🎉</h1>
      <h2>Write a post about what you are excited to learn about :P</h2>
      <Post name={name} description={description} likes={likes}/>

      {/* <Post name={students[0].name} description={students[0].description} likes={students[0].likes}/>
      <Post name={students[1].name} description={students[1].description} likes={students[1].likes}/>
      <Post name={students[2].name} description={students[2].description} likes={students[2].likes}/> */}

      {
        students.map((student, i) => {
          return (
            <Post 
              name={student.name}
              key={i}
              description={student.description}
              likes={student.likes}
            />
          )
        })
      }

      <Prom />
    </>
  )
}

export default App