import React, { useEffect } from "react"
import Banner from "../Organisms/Banner"
import { connect } from "react-redux"
import store from '../../redux/store';
import { getAllCourses } from '../../redux/actionCreators';
import Card from "../Organisms/Card";

const Courses = ({ courses }) => {

  useEffect(() => {
    store.dispatch(getAllCourses())
  }, [])

  return (
    <>
      <Banner
        color="second-color"
        image={{
          src: "http://seclist.us/wp-content/uploads/2015/10/myshellcode-debugging-470x260.jpg",
          alt: "Banner cursos"
        }}
        title="Cursos"
        subtitle="Cursos 100% enfocados a tecnologia de punta"
      />
      {
        courses &&
        <main className="ed-grid m-grid-5">
          {
            courses.map(c => (
              <Card
                path="cursos"
                picture={c.picture}
                name={c.name}
                key={c.id}
                card={c.id} />
            ))
          }
        </main>
      }
    </>

  )
}
const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses)
