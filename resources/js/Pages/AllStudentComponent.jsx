import React, { Component } from 'react'
import StudentComponent from './StudentComponent'

export default class AllStudentComponent extends Component {
    state = {
        student: {
            Name: 'John',
            Age: 22,
            Email: 'john@email.com'
        }
    }
    render() {
        return (
            <>
                <div>AllStudentComponent</div>
                <StudentComponent student={this.state.student} />
            </>

        )
    }
}
