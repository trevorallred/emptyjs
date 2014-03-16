'use strict';
var chai = require('chai'),
    assert = chai.assert;

chai.Should();

describe('Sample', function () {
    it('assert A', function () {
        assert.equal('A', 'A');
    });
    it('should equal A', function () {
        'B'.should.equal('B');
    });
});
