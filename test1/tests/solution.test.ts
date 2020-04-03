import { expect } from 'chai';
import { solution } from '../src/solution';

describe('check 2 init test', function() {
  it('test case 1', function() {
    let D = {"2019-01-01":100,"2019-01-04":115};
    let result = solution(D);
    expect(result).to.eql({
      '2019-01-01': 100,
      '2019-01-02': 105,
      '2019-01-03': 110,
      '2019-01-04': 115});
  });

  it('test case 2', function() {
    let D = {"2019-01-10":10,"2019-01-11":20, "2019-01-13":10};
    let result = solution(D);
    expect(result).to.eql({
      '2019-01-10': 10,
      '2019-01-11': 20,
      '2019-01-12': 15,
      '2019-01-13': 10
    });
  });
});


describe('wrong inputs', function() {
  it('wrong year', function() {
    let D = {"1969-01-01":100,"2019-01-04":115};
    let result = solution(D);
    expect(result).to.eql("check inputs!");
  });

  it('wrong month', function() {
    let D = {"1970-13-01":100,"2019-01-04":115};
    let result = solution(D);
    expect(result).to.eql("check inputs!");
  });

  it('wrong day', function() {
    let D = {"1970-13-32":100,"2019-01-04":115};
    let result = solution(D);
    expect(result).to.eql("check inputs!");
  });

  it('wrong value', function() {
    let D = {"1970-13-32":-1,"2019-01-04":115};
    let result = solution(D);
    expect(result).to.eql("check inputs!");
  });

});


describe('unsorted dates', function() {
  it('test case 1', function() {
    let D = {"2019-01-04":115,"2019-01-01":100};
    let result = solution(D);
    expect(result).to.eql({
      '2019-01-01': 100,
      '2019-01-02': 105,
      '2019-01-03': 110,
      '2019-01-04': 115});
    });

  it('test case 2', function() {
    let D = {"2019-01-01":115,"2018-12-29":100};
    let result = solution(D);
    expect(result).to.eql({
      '2018-12-29': 100,
      '2018-12-30': 105,
      '2018-12-31': 110,
      '2019-01-01': 115});
    });
});
