const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two number', () => {
      let res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
      // if(res !== 44) {
      //   throw new Error(`Expected 44, but got ${res}`)
      // }
    })
  })


  it('should square the input number', () => {
    let res = utils.square(5);

    expect(res).toBe(25).toBeA('number');
    // if(res !== 25) {
    //   throw new Error(`Expected 25, but got ${res}`)
    // }
  })

  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    })
  })

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (sum) => {
      expect(sum).toBe(25).toBeA('number');
      done();
    })
  })

  // it('shoulbe expect some value', () => {
  //   // toEqual/toNotEqual is use for Object/Array
  //   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'})
  //   // toInclude/ToExclude is to see if object or Array contains certain element/shouldComponentUpdate: function(nextProps, nextState) {
  //     // expect([2,3,4]).toInclude(2);
  //     expect({
  //       name: 'Jin',
  //       age: 27,
  //       location: 'New York'
  //     }).toInclude({
  //       age: 27,
  //     })
  // })

  it('should contain user first and last name', () => {
    let user = {location: 'NY', age: 27}
    res = utils.setName(user, 'Jin Li')

    expect(res).toInclude({
      firstName: 'Jin',
      lastName: 'Li'
    })
  })
});
