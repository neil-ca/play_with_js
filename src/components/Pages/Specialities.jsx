import React, { useEffect } from "react"
import Banner from "../Organisms/Banner"
import store from '../../redux/store'
import { getAllSpecialities } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Card from "../Organisms/Card"

const Specialities = ({ specialities }) => {

  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, [])
  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: "http://seclist.us/wp-content/uploads/2015/10/myshellcode-debugging-470x260.jpg",
          alt: "Banner Especialidades"
        }}
        title="Especialidades"
        subtitle="Domina una tecnología con las mejores rutas de aprendizaje"
      />
      {
        specialities &&
        <main className="ed-grid m-grid-3">
          {
            specialities.map(s => (
              <Card
                path="especialidades"
                picture={s.picture}
                name={s.name}
                key={s.id}
                card={s.id}
              />
            ))
          }
        </main>
      }
    </>
  )
}

const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})

export default connect(mapStateToProps, {})(Specialities)
