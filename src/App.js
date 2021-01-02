import React, { Component } from 'react';

import CourseForm from './Components/CourseForm'
import CourseList from './Components/CourseList'

class App extends Component {
  state = {
    courses : [
      {name : "HTML"},
      {name : "CSS"},
      {name : "JavaScript"},
    ],
    current : ''
  }
//Update Course
updateCourse = (e) => {
  this.setState({
    current: e.target.value
  })
}


//Add Course
addCourse = (e) => {
  e.preventDefault();
  if(e.target.name.value === ''){
    return false
  } else {
  let current = this.state.current;
  let courses = this.state.courses;
  courses.push({name: current})
  this.setState({
    courses,
    current:''
  })
}
}


//Delete Course
deleteCourse = (index) =>{
  let courses = this.state.courses;
  courses.splice(index, 1);
  this.setState({
    courses
  })
}

//edit Course
editCourse = (index, value) =>{
  let courses = this.state.courses;
  let course = courses[index];
  course['name'] = value;
  this.setState({
    courses
  })
}
  render() {
    const {courses} = this.state;
    let length = courses.length ; 
    const courseList = length ? (
      courses.map( (course , index ) =>{
        return <CourseList details={course} key={index} index={index} update={this.handleChange} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
      })
    ) : (
      <p>There is no item to show</p>
    )
    return (
      <section className="App">
        <h2>Add Course</h2>
          <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse} />
          <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
