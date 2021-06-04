import React from "react"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

class Preloader extends React.Component {
  componentDidMount() {
    $(window).on("load", function () {
      if ($("#preloader").length) {
        $("#preloader")
          .delay(100)
          .fadeOut("slow", function () {
            $(this).remove()
          })
      }
    })
  }

  render() {
    return <div id="preloader"></div>
  }
}

export default Preloader
