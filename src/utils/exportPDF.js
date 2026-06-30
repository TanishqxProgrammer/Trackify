import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const exportPDF = ({ habits, totalDays, selectedMonth, selectedYear }) => {
  const doc = new jsPDF();

  const monthName = new Date(selectedYear, selectedMonth).toLocaleString(
    "en-US",
    {
      month: "long",
    },
  );

  // Title
  doc.setFontSize(22);
  doc.text("Habit Tracker Report", 14, 20);

  // Month
  doc.setFontSize(12);
  doc.text(`Month: ${monthName} ${selectedYear}`, 14, 30);

  // Table Data
  const tableData = habits
    .filter((habit) => habit.name.trim() !== "")
    .map((habit) => {
      const completed = habit.checks.filter(Boolean).length;

      return [habit.name, habit.goal || "-", `${completed}/${totalDays}`];
    });

  autoTable(doc, {
    head: [["Habit", "Goal", "Completed"]],
    body: tableData,
    startY: 40,
  });

  doc.save(`Habit_Report_${monthName}_${selectedYear}.pdf`);
};

export default exportPDF;
