const customerInfo = [
  {
    customerName: 'Guillaume Vincent',
    email: 'guillaume.vincent@example.com',
    gender: 'male',
    age: 25,
    region: 'CH',
    birthday: '1995-05-05',
    avatar: 'https://randomuser.me/api/portraits/men/88.jpg'
  },
  {
    customerName: 'Vanessa Davis',
    email: 'vanessa.davis@example.com',
    gender: 'female',
    age: 33,
    region: 'AU',
    birthday: '1987-08-08',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg'
  },
  {
    customerName: 'Justine Smith',
    email: 'justine.smith@example.com',
    gender: 'female',
    age: 53,
    region: 'CA',
    birthday: '1967-11-13',
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg'
  },
  {
    customerName: 'Zbigniew Gleich',
    email: 'zbigniew.gleich@example.com',
    gender: 'male',
    age: 45,
    region: 'DE',
    birthday: '1975-10-13',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    customerName: 'Elias Silva',
    email: 'elias.silva@example.com',
    gender: 'male',
    age: 31,
    region: 'BR',
    birthday: '1989-12-05',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg'
  },
  {
    customerName: 'Anna-Marie Kretschmann',
    email: 'anna-marie.kretschmann@example.com',
    gender: 'female',
    age: 22,
    region: 'DE',
    birthday: '1998-04-10',
    avatar: 'https://randomuser.me/api/portraits/women/78.jpg'
  },
  {
    customerName: 'Dominic Dupont',
    email: 'dominic.dupont@example.com',
    gender: 'male',
    age: 63,
    region: 'CH',
    birthday: '1957-06-29',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    customerName: 'Mae Robinson',
    email: 'mae.robinson@example.com',
    gender: 'female',
    age: 36,
    region: 'US',
    birthday: '1984-11-29',
    avatar: 'https://randomuser.me/api/portraits/women/72.jpg'
  }
]

const cardAssign = document.querySelector('#cardStuffs')

console.log(cardAssign)
customerInfo.forEach(function (customer, index) {
  console.log(index)
  cardAssign.innerHTML += `
  <div class="card d-flex mb-2" style="width: 17rem;">
  <img class="card-img-top" src=${customer.avatar} alt="Card image cap">
    <div class="card-body">
      <div class="d-flex flex-row-reverse">
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter${index}">
          More
        </button>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">${customer.customerName}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <br> mail: ${customer.email}
              <br> gender: ${customer.gender}
              <br> age: ${customer.age}
              <br> region: ${customer.region}
              <br> birthday: ${customer.birthday}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
`
})
