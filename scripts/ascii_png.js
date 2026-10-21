const fs = require('fs');
const zlib = require('zlib');

const b64 = 'iVBORw0KGgoAAAANSUhEUgAAAbgAAAG4BAMAAADF5O+AAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURXiQnIabpn+WoYOYpHyTn3mRnYWapYGXotUtPzYAAALNSURBVHja7d2xTttgFIZhqzLKfASia6DQnVbsSaV6RlSiK76E3P/CgtpSknjpL8dfn+cGwisIBuf3OV0HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAp6b9dN3DzcAptj2M1cXl7Am3VyuV67razu2ZxdT73T+aPauh+5ri7lnEf5237UE1tZo17ahv3PHUValp/1TbuYuLlh/Vi33KTb7q+WsadtW2ry+Mvv2sa1zeOq4eJy9Ci4zYTfz+sl3slOB43VG5cPwbHbSs3blW5ca//jWTGvf43EhnXj8FxQ+XG/frjITFuFxz3+95GXtwfN6Xy4obKjevH4Lht5catKjfu7S3usLi3t7iz4voxOG6o3Li/70hFxe2C4959YBYU9/6TzqC4oXLj+jE4blu5cavKjdt7biIlbu+5iZC4Pb9NcuKGyo078DFnRtwuOO7QKayEuIPH5xLihsqN238ZCInbVm7cqnLjjh3GXXzcscO4S487/NskIG6o3LjjZ+cWHrcLjps42r/ouO93wXGfKziuxIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkT9x/HRR+Pij7YFn0kMfswafYx4OgD3NlH76Mfmsh+3CX6QaXsR8yyHw6Mfqwz+4Hc6Eepsx+Czx5fED14IntkSPSwl+wxPdEDlrJHY2UPNYseR5c9SDB6BGT28M7ssavRA3OzRx1HD6nOHi8ePRg+e6R/9jKG6DUa2QtQolfXZC8dyl4XFb3oK3tFW/Ryvey1iNELLbNXkWYvkW2+/jd6cXP0yu3oZenRa+67q7ZxFxMvPzSNe2ob9zz1nt90y70WNP3aZ37Tnc/b1vbn8n7muLOG37rzh5njusd2F7l1N7ufY6O22+4E9Nefvv5zX242HQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS/IC5yVH48Ho/XwAAAAASUVORK5CYII=';
const buf = Buffer.from(b64, 'base64');
const idatIdx = buf.indexOf('IDAT');
const idatLen = buf.readUInt32BE(idatIdx - 4);
const decompressed = zlib.inflateSync(buf.slice(idatIdx + 4, idatIdx + 4 + idatLen));

// sample every 8th row and 8th column
for (let y = 135; y < 310; y += 4) {
  let line = '';
  const rowStart = y * 221;
  for (let x = 0; x < 220; x += 2) {
    const byte = decompressed[rowStart + 1 + x];
    line += byte > 0 ? '#' : ' ';
  }
  if (line.trim().length > 0) {
    console.log(line);
  }
}
