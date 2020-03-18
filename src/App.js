import React, {Component} from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      des: '',
      gender: 0,
      exampleRadios: 'es',
      valueCheckBox: true
    }
    //name trong input phai giong thuộct ính trong this.state
  }
  onHandChange = (event) => {
    console.log(event.target,'=>>>>>>>>>');
    let target = event.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    // this.setState({
    //   userName: event.target.value
    // })
    this.setState({
      [name]: value
      //name trong o input
    })
  }
  onHandSubmit = (event) => {
    event.preventDefault();
    //k cho submid;
    console.log(this.state)
  };
  resetForm = () => {
    this.setState({
      userName: '',
      passWord: '',
      des: '',
      gender: 0,
      exampleRadios: 'es'
    })
  };

  render() {
    return (
        <div className="container mt-50">
          <div className="row">
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="panel">
                <div className="panel-heading">Form</div>
                <div className="panel-body">
                  <form onSubmit={this.onHandSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">User Name: </label>
                      <input type="text"
                             name="userName"
                             onChange={this.onHandChange}
                             className="form-control"
                             id="exampleInputEmail1"
                             aria-describedby="emailHelp"
                             placeholder="UserName" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">PassWord: </label>
                      <input type="password"
                             name="passWord"
                             onChange={this.onHandChange}
                             className="form-control"
                             id="exampleInput"
                             aria-describedby="emailHelp"
                             placeholder="PassWord" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Mô tả: </label>
                      <textarea type="text"
                             name="des"
                             onChange={this.onHandChange}
                             className="form-control"
                             id="example"
                             aria-describedby="emailHelp"
                                placeholder="Descriptions" >
                      </textarea>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">Giới tính</label>
                      <select value={this.state.gender} onChange={this.onHandChange} name="gender" className="form-control" id="exampleFormControlSelect1">
                        <option value={0}>Nữ</option>
                        <option value={1}>Nam</option>
                      </select>
                    </div>
                    <div className="form-check disabled">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                             value="es" onChange={this.onHandChange} checked={this.state.exampleRadios === 'es'}  />
                        <label className="form-check-label" htmlFor="exampleRadios3">
                          Tiếng anh
                        </label><br/>

                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                             value="vie" onChange={this.onHandChange} checked={this.state.exampleRadios === 'vie'}  />
                      <label className="form-check-label" htmlFor="exampleRadios3">
                        Tiếng việt
                      </label>
                    </div>
                    <div className="form-check">
                      <input checked={this.state.valueCheckBox === true} className="form-check-input position-static" type="checkbox" onChange={this.onHandChange} name="valueCheckBox" id="blankCheckbox"
                             value="option1" aria-label="..." />
                    </div>
                    <button type="submit" className="btn btn-primary">Lưu lại</button>
                    <button type="reset" className="btn btn-danger" onClick={this.resetForm}>Xóa trắng</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
