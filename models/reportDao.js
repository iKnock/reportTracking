var dbConnection = require('../utils/connection')

class Reports {
	constructor(reportId, reportTitle, reportDesc, happenOnDate, reportedOnDate, reportCategory, remark) {
		this.reportId = reportId;
		this.reportTitle = reportTitle;
		this.reportDesc = reportDesc;
		this.happenOnDate = happenOnDate;
		this.reportedOnDate = reportedOnDate;
		this.reportCategory = reportCategory;
		this.remark = remark;
	}

	//do set operation for each property

	getReportId() {
		return this.reportId;
	}

	getReportTitle() {
		return this.reportTitle;
	}

	getReportDesc() {
		return this.reportDesc;
	}

	getHappenOnDate() {
		return this.happenOnDate;
	}

	getReportOnDate() {
		return this.reportedOnDate;
	}

	getReportCategory() {
		return this.reportCategory;
	}

	getReportRemark() {
		return this.remark;
	}

	getReport() {
		return {
			reportId: this.reportId,
			reportTitle: this.reportTitle,
			reportDesc: this.reportDesc,
			happenOnDate: this.happenOnDate,
			reportedOnDate: this.reportedOnDate,
			category: this.reportCategory,
			remark: this.remark
		};

		/** return `
		   ReportId: ${this.reportId}
		   ReportTitle: ${this.reportTitle}
		   ReportDesc: ${this.reportDesc}
		   HappenOnDate: ${this.happenOnDate}
		   ReportedOnDate: ${this.reportedOnDate}
		   Category: ${this.reportCategory}
		   Remark: ${this.remark}
		 `; */
	}
}

module.exports = Reports;