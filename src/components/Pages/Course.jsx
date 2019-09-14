import React, { useEffect } from "react"
import { connect } from "react-redux"
import store from "../../redux/store"
import { getCourse } from "../../redux/actionCreators"
import Banner from "../Organisms/Banner"

const Course = ({course}) => { 
  useEffect(() => {
    store.dispatch(getCourse(1))
  }, [])

  return ( 
    <>
      { course && 
      <>
      <Banner 
      color="dark-color"
      title={course.name}
      subtitle={course.information}
      image={{
        src: "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2018-04/office-tech.jpg?itok=0L55-FRs",
        alt: course.name
      }}
      courseBanner
      poster={course.picture}
      especialidad={course.data.specialities[0].name}
      />
      </>
      }
    </>
  )
}


  const mapStateToProops = state => (
    {
      course: state.courseReducer.course
    }
  )
export default connect(mapStateToProops, {})(Course)
