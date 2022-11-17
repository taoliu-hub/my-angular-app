import { Component, OnInit } from '@angular/core';
import { Border, Style, Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-working-with-excel',
  templateUrl: './working-with-excel.component.html',
  styleUrls: ['./working-with-excel.component.css']
})
export class WorkingWithExcelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  schoolSelectedItems = [
    { codeDesc: "codeDesc" }
  ];
  table1 = [
    { header1: [{ header1: "h1", colspan: 10 }], header2: [{ header2: "h1", colspan: 10 }], header3: ["h3"], data: { school: [], same: [], above: [], below: [] } }
  ];
  table2 = [
    { header1: ["h1"], header2: ["h1"], header3: ["h3"], data: [{ schoolName: 'schoolName', data: [] }] }
  ];
  table3 = [
    { header1: [{ header1: "h1", colspan: 10 }], header2: [{ header2: "h1", colspan: 10 }], header3: ["h3"], data: [{ recordSchool: [] }] }
  ];
  year = '';

  downloadExcel() {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('SheetName');
    let totalRows = 0
    for (let i = 0; i < this.schoolSelectedItems.length; i++) {
      const title1T1 = 'title1T1';
      const title2T1 = 'title2T1';
      const title3T1 = 'title3T1';
      const title1T2 = 'title1T2';
      const title2T2 = 'title2T2';
      const title3T2 = 'title3T2';
      const title1T3 = 'title1T3';
      const title2T3 = 'title2T3';
      const title3T3 = 'title3T3';
      const title4T3 = 'title4T3';
      const title5T3 = 'title5T3';
      const tit1T1 = worksheet.addRow([title1T1]);
      tit1T1.eachCell((cell, number) => {
        cell.font = { bold: true, size: 23 };
      });
      const tit2T1 = worksheet.addRow([title2T1]);
      tit2T1.eachCell((cell, number) => {
        cell.font = { bold: true, size: 23 };
      });
      worksheet.addRow([title3T1]);
      const header1T1 = ['School']
      const header2T1 = ['School']
      const header3T1 = ['School']
      this.table1[i]?.header1.forEach(d1 => {
        if (d1.colspan > 1) {
          for (let i = 0; i < d1.colspan; i++) {
            header1T1.push(d1.header1)
          }
        } else {
          header1T1.push(d1.header1)
        }
      })
      const headerRow1 = worksheet.addRow(header1T1);
      headerRow1.eachCell((cell, number) => {
        cell.font = { bold: true };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a6a6a6' }
        }
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      });
      let charStratH1T1 = 66
      let charEndH1T1
      this.table1[i]?.header1.forEach((d1, index) => {
        if (d1.colspan > 1) {
          charEndH1T1 = charStratH1T1 + index
          worksheet.mergeCells(`${String.fromCharCode(charEndH1T1)}${4 + totalRows}:${String.fromCharCode(charEndH1T1 + d1.colspan - 1)}${4 + totalRows}`);
          charStratH1T1 += d1.colspan - 1
        }
      })
      this.table1[i]?.header2.forEach(d2 => {
        if (d2.colspan > 1) {
          for (let i = 0; i < d2.colspan; i++) {
            header2T1.push(d2.header2)
          }
        } else {
          header2T1.push(d2.header2)
        }
      })
      const headerRow2 = worksheet.addRow(header2T1);
      headerRow2.eachCell((cell, number) => {
        cell.font = { bold: true };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a6a6a6' }
        }
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      });
      let charStratH2T1 = 66
      let charEndH2T1
      this.table1[i]?.header2.forEach((d2, index) => {
        if (d2.colspan > 1) {
          charEndH2T1 = charStratH2T1 + index
          worksheet.mergeCells(`${String.fromCharCode(charEndH2T1)}${5 + totalRows}:${String.fromCharCode(charEndH2T1 + d2.colspan - 1)}${5 + totalRows}`);
          charStratH2T1 += d2.colspan - 1
        }
      })
      this.table1[i]?.header3.forEach(d3 => {
        header3T1.push(d3)
      })
      const headerRow3 = worksheet.addRow(header3T1);
      headerRow3.eachCell((cell, number) => {
        cell.font = { bold: true };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a6a6a6' }
        }
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      });

      worksheet.mergeCells(`A${4 + totalRows}:A${6 + totalRows}`)

      const row1 = worksheet.addRow(this.table1[i]?.data.school);
      row1.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.alignment = { vertical: 'middle', horizontal: 'right' };
      });
      const row2 = worksheet.addRow(this.table1[i]?.data.same);
      row2.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.alignment = { vertical: 'middle', horizontal: 'right' };
      });
      const row3 = worksheet.addRow(this.table1[i]?.data.above);
      row3.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.alignment = { vertical: 'middle', horizontal: 'right' };
      });
      const row4 = worksheet.addRow(this.table1[i]?.data.below);
      row4.eachCell((cell, number) => {
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.alignment = { vertical: 'middle', horizontal: 'right' };
      });

      worksheet.addRow([]);
      worksheet.addRow([]);
      worksheet.addRow([]);

      const tit1T2 = worksheet.addRow([title1T2]);
      tit1T2.eachCell((cell, number) => {
        cell.font = { bold: true, size: 23 };
      });
      worksheet.addRow([title2T2]);
      worksheet.addRow([title3T2]);
      const header1T2 = ['School']
      let header2T2 = ['School']
      let header3T2 = ['School']
      this.table2[i]?.header1.forEach(t2 => {
        header1T2.push(t2)
        header1T2.push(t2)
        header1T2.push(t2)
        header1T2.push(t2)
        header2T2 = header2T2.concat(this.table2[i].header2)
        header3T2 = header3T2.concat(this.table2[i].header3)
      })
      const headerRow4 = worksheet.addRow(header1T2);
      headerRow4.eachCell((cell, number) => {
        cell.font = { bold: true };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a6a6a6' }
        }
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      });
      this.table2[i]?.header1.forEach((t2, index) => {
        const char1 = index * 4 + 66
        const char2 = char1 + 3
        worksheet.mergeCells(`${String.fromCharCode(char1)}${17 + totalRows}:${String.fromCharCode(char2)}${17 + totalRows}`);
      })
      const headerRow5 = worksheet.addRow(header2T2);
      headerRow5.eachCell((cell, number) => {
        cell.font = { bold: true };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a6a6a6' }
        }
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      });
      const headerRow6 = worksheet.addRow(header3T2);
      headerRow6.eachCell((cell, number) => {
        cell.font = { bold: true };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a6a6a6' }
        }
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      });
      worksheet.mergeCells(`A${17 + totalRows}:A${19 + totalRows}`)
      this.table2[i]?.data.forEach(t2 => {
        if (t2.schoolName !== 'ZZ_SAME' && t2.schoolName !== 'ZZ_BELOW' && t2.schoolName !== 'ZZ_ABOVE') {
          const row5 = worksheet.addRow(t2.data);
          row5.eachCell((cell, number) => {
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            cell.alignment = { vertical: 'middle', horizontal: 'right' };
          });
        }
      })
      this.table2[i]?.data.forEach(t2 => {
        if (t2.schoolName === 'ZZ_SAME') {
          const row6 = worksheet.addRow(t2.data);
          row6.eachCell((cell, number) => {
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            cell.alignment = { vertical: 'middle', horizontal: 'right' };
          });
        }
      })
      this.table2[i]?.data.forEach(t2 => {
        if (t2.schoolName === 'ZZ_ABOVE') {
          const row7 = worksheet.addRow(t2.data);
          row7.eachCell((cell, number) => {
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            cell.alignment = { vertical: 'middle', horizontal: 'right' };
          });
        }
      })
      this.table2[i]?.data.forEach(t2 => {
        if (t2.schoolName === 'ZZ_BELOW') {
          const row8 = worksheet.addRow(t2.data);
          row8.eachCell((cell, number) => {
            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            cell.alignment = { vertical: 'middle', horizontal: 'right' };
          });
        }
      })
      worksheet.addRow([]);
      worksheet.addRow([]);
      worksheet.addRow([]);

      const tit1T3 = worksheet.addRow([title1T3]);
      tit1T3.eachCell((cell, number) => {
        cell.font = { bold: true, size: 23 };
      });
      const tit2T3 = worksheet.addRow([title2T3]);
      tit2T3.eachCell((cell, number) => {
        cell.font = { bold: true, size: 23 };
      });
      worksheet.addRow([]);
      const tit3T3 = worksheet.addRow([title3T3]);
      tit3T3.eachCell((cell, number) => {
        cell.font = { bold: true, size: 17 };
      });
      worksheet.addRow([]);
      worksheet.addRow([title4T3]);
      worksheet.addRow([title5T3]);
      const header1T3 = ['School']
      const header2T3 = ['School']
      const header3T3 = ['School']
      this.table3[i]?.header1.forEach(d1 => {
        if (d1.colspan > 1) {
          for (let i = 0; i < d1.colspan; i++) {
            header1T3.push(d1.header1)
          }
        } else {
          header1T3.push(d1.header1)
        }
      })
      const headerRow7 = worksheet.addRow(header1T3);
      headerRow7.eachCell((cell, number) => {
        cell.font = { bold: true };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a6a6a6' }
        }
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      });
      let charStratH1T3 = 66
      let charEndH1T3
      this.table3[i]?.header1.forEach((d1, index) => {
        if (d1.colspan > 1) {
          charEndH1T3 = charStratH1T3 + index
          worksheet.mergeCells(`${String.fromCharCode(charEndH1T3)}${34 + totalRows}:${String.fromCharCode(charEndH1T3 + d1.colspan - 1)}${34 + totalRows}`);
          charStratH1T3 += d1.colspan - 1
        }
      })
      this.table3[i]?.header2.forEach(d2 => {
        if (d2.colspan > 1) {
          for (let i = 0; i < d2.colspan; i++) {
            header2T3.push(d2.header2)
          }
        } else {
          header2T3.push(d2.header2)
        }
      })
      const headerRow8 = worksheet.addRow(header2T3);
      headerRow8.eachCell((cell, number) => {
        cell.font = { bold: true };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a6a6a6' }
        }
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      });
      let charStratH2T3 = 66
      let charEndH2T3
      this.table3[i]?.header2.forEach((d2, index) => {
        if (d2.colspan > 1) {
          charEndH2T3 = charStratH2T3 + index
          worksheet.mergeCells(`${String.fromCharCode(charEndH2T3)}${35 + totalRows}:${String.fromCharCode(charEndH2T3 + d2.colspan - 1)}${35 + totalRows}`);
          charStratH2T3 += d2.colspan - 1
        }
      })
      this.table3[i]?.header3.forEach(d3 => {
        header3T3.push(d3)
      })
      const headerRow9 = worksheet.addRow(header3T3);
      headerRow9.eachCell((cell, number) => {
        cell.font = { bold: true };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a6a6a6' }
        }
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      });
      worksheet.mergeCells(`A${34 + totalRows}:A${36 + totalRows}`);
      this.table3[i]?.data.forEach(d => {
        const row = worksheet.addRow(d.recordSchool);
        row.eachCell((cell, number) => {
          cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
          cell.alignment = { vertical: 'middle', horizontal: 'right' };
        });
      });

      worksheet.addRow([]);
      worksheet.addRow([]);
      worksheet.addRow([]);
      totalRows += (39 + this.table3[i]?.data.length)
    }
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs.saveAs(blob, `REPORT_${Number(this.year) + 1}.xlsx`);
    });
  }



  async exportSimpleExcel() {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('My Sheet',
      {
        properties: {
          tabColor: { argb: 'ff0000' },
          defaultColWidth: 20,
          defaultRowHeight: 20,
        }, views: [{ state: 'frozen', xSplit: 1, ySplit: 1 }]
      });

    // 设置列
    worksheet.columns = [
      { header: 'Id', key: 'id' },
      { header: 'Name', key: 'name' },
      { header: 'D.O.B.', key: 'DOB' }
    ];

    let tableDate = [{ id: 1, name: 'John Doe', DOB: '2022-06-18' }, { id: 2, name: 'Jane Doe', DOB: '2022-06-18' }];

    // worksheet.columns = this.excelSheet;
    // 插入数据
    worksheet.addRows(tableDate);

    // 写入文件
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // 示例时可去掉type
    }), `Equity Risk Rating - ${(new Date())}.xlsx`)

  }

}

