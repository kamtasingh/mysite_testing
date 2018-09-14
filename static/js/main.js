
(function ($) {
  // USE STRICT
  "use strict";

  try {
    //WidgetChart 1
    var ctx = document.getElementById("widgetChart1");
    if (ctx) {
      ctx.height = 130;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          type: 'line',
          datasets: [{
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'Dataset',
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
          },]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
              },
              ticks: {
                fontSize: 2,
                fontColor: 'transparent'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                display: false,
              }
            }]
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              borderWidth: 0
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4
            }
          }
        }
      });
    }


    //WidgetChart 2
    var ctx = document.getElementById("widgetChart2");
    if (ctx) {
      ctx.height = 130;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          type: 'line',
          datasets: [{
            data: [1, 18, 9, 17, 34, 22],
            label: 'Dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
          },]
        },
        options: {

          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
              },
              ticks: {
                fontSize: 2,
                fontColor: 'transparent'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                display: false,
              }
            }]
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              tension: 0.00001,
              borderWidth: 1
            },
            point: {
              radius: 4,
              hitRadius: 10,
              hoverRadius: 4
            }
          }
        }
      });
    }


    //WidgetChart 3
    var ctx = document.getElementById("widgetChart3");
    if (ctx) {
      ctx.height = 130;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          type: 'line',
          datasets: [{
            data: [65, 59, 84, 84, 51, 55],
            label: 'Dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
          },]
        },
        options: {

          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Montserrat',
            bodyFontFamily: 'Montserrat',
            cornerRadius: 3,
            intersect: false,
          },
          scales: {
            xAxes: [{
              gridLines: {
                color: 'transparent',
                zeroLineColor: 'transparent'
              },
              ticks: {
                fontSize: 2,
                fontColor: 'transparent'
              }
            }],
            yAxes: [{
              display: false,
              ticks: {
                display: false,
              }
            }]
          },
          title: {
            display: false,
          },
          elements: {
            line: {
              borderWidth: 1
            },
            point: {
              radius: 4,
              hitRadius: 10,
              hoverRadius: 4
            }
          }
        }
      });
    }


    //WidgetChart 4
    var ctx = document.getElementById("widgetChart4");
    if (ctx) {
      ctx.height = 115;
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: "My First dataset",
              data: [78, 81, 80, 65, 58, 75, 60, 75, 65, 60, 60, 75],
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "rgba(255,255,255,.3)"
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 0.65
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }

    // Recent Report
    const brandProduct = 'rgba(0,181,233,0.8)'
    const brandService = 'rgba(0,173,95,0.8)'

    var elements = 10
    var data1 = [52, 60, 55, 50, 65, 80, 57, 70, 105, 115]
    var data2 = [102, 70, 80, 100, 56, 53, 80, 75, 65, 90]

    var ctx = document.getElementById("recent-rep-chart");
    if (ctx) {
      ctx.height = 250;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', ''],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: brandService,
              borderColor: 'transparent',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data1

            },
            {
              label: 'My Second dataset',
              backgroundColor: brandProduct,
              borderColor: 'transparent',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data2

            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                drawOnChartArea: true,
                color: '#f2f2f2'
              },
              ticks: {
                fontFamily: "Poppins",
                fontSize: 12
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: 50,
                max: 150,
                fontFamily: "Poppins",
                fontSize: 12
              },
              gridLines: {
                display: true,
                color: '#f2f2f2'

              }
            }]
          },
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3
            }
          }


        }
      });
    }

    // Percent Chart


  } catch (error) {
    console.log(error);
  }



  try {

    // Recent Report 2
    const bd_brandProduct2 = 'rgba(0,181,233,0.9)'
    const bd_brandService2 = 'rgba(0,173,95,0.9)'
    const brandProduct2 = 'rgba(0,181,233,0.2)'
    const brandService2 = 'rgba(0,173,95,0.2)'

    var data3 = [52, 60, 55, 50, 65, 80, 57, 70, 105, 115]
    var data4 = [102, 70, 80, 100, 56, 53, 80, 75, 65, 90]

    var ctx = document.getElementById("recent-rep2-chart");
    if (ctx) {
      ctx.height = 230;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', ''],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: brandService2,
              borderColor: bd_brandService2,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data3

            },
            {
              label: 'My Second dataset',
              backgroundColor: brandProduct2,
              borderColor: bd_brandProduct2,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data4

            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                drawOnChartArea: true,
                color: '#f2f2f2'
              },
              ticks: {
                fontFamily: "Poppins",
                fontSize: 12
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: 50,
                max: 150,
                fontFamily: "Poppins",
                fontSize: 12
              },
              gridLines: {
                display: true,
                color: '#f2f2f2'

              }
            }]
          },
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3
            },
            line: {
              tension: 0
            }
          }


        }
      });
    }

  } catch (error) {
    console.log(error);
  }


  try {

    // Recent Report 3
    const bd_brandProduct3 = 'rgba(0,181,233,0.9)';
    const bd_brandService3 = 'rgba(0,173,95,0.9)';
    const brandProduct3 = 'transparent';
    const brandService3 = 'transparent';

    var data5 = [52, 60, 55, 50, 65, 80, 57, 115];
    var data6 = [102, 70, 80, 100, 56, 53, 80, 90];

    var ctx = document.getElementById("recent-rep3-chart");
    if (ctx) {
      ctx.height = 230;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', ''],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: brandService3,
              borderColor: bd_brandService3,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data5,
              pointBackgroundColor: bd_brandService3
            },
            {
              label: 'My Second dataset',
              backgroundColor: brandProduct3,
              borderColor: bd_brandProduct3,
              pointHoverBackgroundColor: '#fff',
              borderWidth: 0,
              data: data6,
              pointBackgroundColor: bd_brandProduct3

            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          responsive: true,
          scales: {
            xAxes: [{
              gridLines: {
                drawOnChartArea: true,
                color: '#f2f2f2'
              },
              ticks: {
                fontFamily: "Poppins",
                fontSize: 12
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                maxTicksLimit: 5,
                stepSize: 50,
                max: 150,
                fontFamily: "Poppins",
                fontSize: 12
              },
              gridLines: {
                display: false,
                color: '#f2f2f2'
              }
            }]
          },
          elements: {
            point: {
              radius: 3,
              hoverRadius: 4,
              hoverBorderWidth: 3,
              backgroundColor: '#333'
            }
          }


        }
      });
    }

  } catch (error) {
    console.log(error);
  }

  try {
    //WidgetChart 5
    var ctx = document.getElementById("widgetChart5");
    if (ctx) {
      ctx.height = 220;
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: [
            {
              label: "My First dataset",
              data: [78, 81, 80, 64, 65, 80, 70, 75, 67, 85, 66, 68],
              borderColor: "transparent",
              borderWidth: "0",
              backgroundColor: "#ccc",
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: false,
              categoryPercentage: 1,
              barPercentage: 0.65
            }],
            yAxes: [{
              display: false
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }



  try {
    //Sales chart
    var ctx = document.getElementById("sales-chart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
          type: 'line',
          defaultFontFamily: 'Poppins',
          datasets: [{
            label: "Foods",
            data: [0, 30, 10, 120, 50, 63, 10],
            backgroundColor: 'transparent',
            borderColor: 'rgba(220,53,69,0.75)',
            borderWidth: 3,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(220,53,69,0.75)',
          }, {
            label: "Electronics",
            data: [0, 50, 40, 80, 40, 79, 120],
            backgroundColor: 'transparent',
            borderColor: 'rgba(40,167,69,0.75)',
            borderWidth: 3,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(40,167,69,0.75)',
          }]
        },
        options: {
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Poppins',
            bodyFontFamily: 'Poppins',
            cornerRadius: 3,
            intersect: false,
          },
          legend: {
            display: false,
            labels: {
              usePointStyle: true,
              fontFamily: 'Poppins',
            },
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: false,
                labelString: 'Month'
              },
              ticks: {
                fontFamily: "Poppins"
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Value',
                fontFamily: "Poppins"

              },
              ticks: {
                fontFamily: "Poppins"
              }
            }]
          },
          title: {
            display: false,
            text: 'Normal Legend'
          }
        }
      });
    }


  } catch (error) {
    console.log(error);
  }

  try {

    //Team chart
    var ctx = document.getElementById("team-chart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
          type: 'line',
          defaultFontFamily: 'Poppins',
          datasets: [{
            data: [0, 7, 3, 5, 2, 10, 7],
            label: "Expense",
            backgroundColor: 'rgba(0,103,255,.15)',
            borderColor: 'rgba(0,103,255,0.5)',
            borderWidth: 3.5,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(0,103,255,0.5)',
          },]
        },
        options: {
          responsive: true,
          tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#000',
            bodyFontColor: '#000',
            backgroundColor: '#fff',
            titleFontFamily: 'Poppins',
            bodyFontFamily: 'Poppins',
            cornerRadius: 3,
            intersect: false,
          },
          legend: {
            display: false,
            position: 'top',
            labels: {
              usePointStyle: true,
              fontFamily: 'Poppins',
            },


          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: false,
                labelString: 'Month'
              },
              ticks: {
                fontFamily: "Poppins"
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Value',
                fontFamily: "Poppins"
              },
              ticks: {
                fontFamily: "Poppins"
              }
            }]
          },
          title: {
            display: false,
          }
        }
      });
    }


  } catch (error) {
    console.log(error);
  }

  try {
    //bar chart
    var ctx = document.getElementById("barChart");
    if (ctx) {
      ctx.height = 200;
      var myChart = new Chart(ctx, {
        type: 'bar',
        defaultFontFamily: 'Poppins',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "My First dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              borderColor: "rgba(0, 123, 255, 0.9)",
              borderWidth: "0",
              backgroundColor: "rgba(0, 123, 255, 0.5)",
              fontFamily: "Poppins"
            },
            {
              label: "My Second dataset",
              data: [28, 48, 40, 19, 86, 27, 90],
              borderColor: "rgba(0,0,0,0.09)",
              borderWidth: "0",
              backgroundColor: "rgba(0,0,0,0.07)",
              fontFamily: "Poppins"
            }
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scales: {
            xAxes: [{
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }]
          }
        }
      });
    }


  } catch (error) {
    console.log(error);
  }

  try {

    //radar chart
    var ctx = document.getElementById("radarChart");
    if (ctx) {
      ctx.height = 200;
      var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
          defaultFontFamily: 'Poppins',
          datasets: [
            {
              label: "My First dataset",
              data: [65, 59, 66, 45, 56, 55, 40],
              borderColor: "rgba(0, 123, 255, 0.6)",
              borderWidth: "1",
              backgroundColor: "rgba(0, 123, 255, 0.4)"
            },
            {
              label: "My Second dataset",
              data: [28, 12, 40, 19, 63, 27, 87],
              borderColor: "rgba(0, 123, 255, 0.7",
              borderWidth: "1",
              backgroundColor: "rgba(0, 123, 255, 0.5)"
            }
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scale: {
            ticks: {
              beginAtZero: true,
              fontFamily: "Poppins"
            }
          }
        }
      });
    }

  } catch (error) {
    console.log(error)
  }

  try {

    //line chart
    var ctx = document.getElementById("lineChart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          defaultFontFamily: "Poppins",
          datasets: [
            {
              label: "My First dataset",
              borderColor: "rgba(0,0,0,.09)",
              borderWidth: "1",
              backgroundColor: "rgba(0,0,0,.07)",
              data: [22, 44, 67, 43, 76, 45, 12]
            },
            {
              label: "My Second dataset",
              borderColor: "rgba(0, 123, 255, 0.9)",
              borderWidth: "1",
              backgroundColor: "rgba(0, 123, 255, 0.5)",
              pointHighlightStroke: "rgba(26,179,148,1)",
              data: [16, 32, 18, 26, 42, 33, 44]
            }
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          responsive: true,
          tooltips: {
            mode: 'index',
            intersect: false
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }]
          }

        }
      });
    }


  } catch (error) {
    console.log(error);
  }





  try {

    //pie chart
    var ctx = document.getElementById("pieChart");
    if (ctx) {
      ctx.height = 200;
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          datasets: [{
            data: [45, 25, 20, 10],
            backgroundColor: [
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.7)",
              "rgba(0, 123, 255,0.5)",
              "rgba(0,0,0,0.07)"
            ],
            hoverBackgroundColor: [
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.7)",
              "rgba(0, 123, 255,0.5)",
              "rgba(0,0,0,0.07)"
            ]

          }],
          labels: [
            "Green",
            "Green",
            "Green"
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          responsive: true
        }
      });
    }


  } catch (error) {
    console.log(error);
  }

  try {

    // polar chart
    var ctx = document.getElementById("polarChart");
    if (ctx) {
      ctx.height = 200;
      var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          datasets: [{
            data: [15, 18, 9, 6, 19],
            backgroundColor: [
              "rgba(0, 123, 255,0.9)",
              "rgba(0, 123, 255,0.8)",
              "rgba(0, 123, 255,0.7)",
              "rgba(0,0,0,0.2)",
              "rgba(0, 123, 255,0.5)"
            ]

          }],
          labels: [
            "Green",
            "Green",
            "Green",
            "Green"
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          responsive: true
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

  try {

    // single bar chart
    var ctx = document.getElementById("singelBarChart");
    if (ctx) {
      ctx.height = 150;
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Sun", "Mon", "Tu", "Wed", "Th", "Fri", "Sat"],
          datasets: [
            {
              label: "My First dataset",
              data: [40, 55, 75, 81, 56, 55, 40],
              borderColor: "rgba(0, 123, 255, 0.9)",
              borderWidth: "0",
              backgroundColor: "rgba(0, 123, 255, 0.5)"
            }
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            }

          },
          scales: {
            xAxes: [{
              ticks: {
                fontFamily: "Poppins"

              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontFamily: "Poppins"
              }
            }]
          }
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

})(jQuery);



(function ($) {
    // USE STRICT
    "use strict";
    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 900,
      outDuration: 900,
      linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class^="chosen-single"])',
      loading: true,
      loadingParentElement: 'html',
      loadingClass: 'page-loader',
      loadingInner: '<div class="page-loader__spin"></div>',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ['animation-duration', '-webkit-animation-duration'],
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'html',
      transition: function (url) {
        window.location.href = url;
      }
    });
  
  
  })(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Map
  try {

    var vmap = $('#vmap');
    if(vmap[0]) {
      vmap.vectorMap( {
        map: 'world_en',
        backgroundColor: null,
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#1de9b6',
        enableZoom: true,
        showTooltip: true,
        values: sample_data,
        scaleColors: [ '#1de9b6', '#03a9f5'],
        normalizeFunction: 'polynomial'
      });
    }

  } catch (error) {
    console.log(error);
  }

  // Europe Map
  try {
    
    var vmap1 = $('#vmap1');
    if(vmap1[0]) {
      vmap1.vectorMap( {
        map: 'europe_en',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        enableZoom: true,
        showTooltip: true
      });
    }

  } catch (error) {
    console.log(error);
  }

  // USA Map
  try {
    
    var vmap2 = $('#vmap2');

    if(vmap2[0]) {
      vmap2.vectorMap( {
        map: 'usa_en',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        enableZoom: true,
        showTooltip: true,
        selectedColor: null,
        hoverColor: null,
        colors: {
            mo: '#001BFF',
            fl: '#001BFF',
            or: '#001BFF'
        },
        onRegionClick: function ( event, code, region ) {
            event.preventDefault();
        }
      });
    }

  } catch (error) {
    console.log(error);
  }

  // Germany Map
  try {
    
    var vmap3 = $('#vmap3');
    if(vmap3[0]) {
      vmap3.vectorMap( {
        map: 'germany_en',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        onRegionClick: function ( element, code, region ) {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();

            alert( message );
        }
      });
    }
    
  } catch (error) {
    console.log(error);
  }
  
  // France Map
  try {
    
    var vmap4 = $('#vmap4');
    if(vmap4[0]) {
      vmap4.vectorMap( {
        map: 'france_fr',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        enableZoom: true,
        showTooltip: true
      });
    }

  } catch (error) {
    console.log(error);
  }

  // Russia Map
  try {
    var vmap5 = $('#vmap5');
    if(vmap5[0]) {
      vmap5.vectorMap( {
        map: 'russia_en',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        hoverOpacity: 0.7,
        selectedColor: '#999999',
        enableZoom: true,
        showTooltip: true,
        scaleColors: [ '#C8EEFF', '#006491' ],
        normalizeFunction: 'polynomial'
      });
    }


  } catch (error) {
    console.log(error);
  }
  
  // Brazil Map
  try {
    
    var vmap6 = $('#vmap6');
    if(vmap6[0]) {
      vmap6.vectorMap( {
        map: 'brazil_br',
        color: '#007BFF',
        borderColor: '#fff',
        backgroundColor: '#fff',
        onRegionClick: function ( element, code, region ) {
            var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
            alert( message );
        }
      });
    }

  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // Use Strict
  "use strict";
  try {
    var progressbarSimple = $('.js-progressbar-simple');
    progressbarSimple.each(function () {
      var that = $(this);
      var executed = false;
      $(window).on('load', function () {

        that.waypoint(function () {
          if (!executed) {
            executed = true;
            /*progress bar*/
            that.progressbar({
              update: function (current_percentage, $this) {
                $this.find('.js-value').html(current_percentage + '%');
              }
            });
          }
        }, {
            offset: 'bottom-in-view'
          });

      });
    });
  } catch (err) {
    console.log(err);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Scroll Bar
  try {
    var jscr1 = $('.js-scrollbar1');
    if(jscr1[0]) {
      const ps1 = new PerfectScrollbar('.js-scrollbar1');      
    }

    var jscr2 = $('.js-scrollbar2');
    if (jscr2[0]) {
      const ps2 = new PerfectScrollbar('.js-scrollbar2');

    }

  } catch (error) {
    console.log(error);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Select 2
  try {

    $(".js-select2").each(function () {
      $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
      });
    });

  } catch (error) {
    console.log(error);
  }


})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Dropdown 
  try {
    var menu = $('.js-item-menu');
    var sub_menu_is_showed = -1;

    for (var i = 0; i < menu.length; i++) {
      $(menu[i]).on('click', function (e) {
        e.preventDefault();
        $('.js-right-sidebar').removeClass("show-sidebar");        
        if (jQuery.inArray(this, menu) == sub_menu_is_showed) {
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = -1;
        }
        else {
          for (var i = 0; i < menu.length; i++) {
            $(menu[i]).removeClass("show-dropdown");
          }
          $(this).toggleClass('show-dropdown');
          sub_menu_is_showed = jQuery.inArray(this, menu);
        }
      });
    }
    $(".js-item-menu, .js-dropdown").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
    });

  } catch (error) {
    console.log(error);
  }

  var wW = $(window).width();
    // Right Sidebar
    var right_sidebar = $('.js-right-sidebar');
    var sidebar_btn = $('.js-sidebar-btn');

    sidebar_btn.on('click', function (e) {
      e.preventDefault();
      for (var i = 0; i < menu.length; i++) {
        menu[i].classList.remove("show-dropdown");
      }
      sub_menu_is_showed = -1;
      right_sidebar.toggleClass("show-sidebar");
    });

    $(".js-right-sidebar, .js-sidebar-btn").click(function (event) {
      event.stopPropagation();
    });

    $("body,html").on("click", function () {
      right_sidebar.removeClass("show-sidebar");

    });
 

  // Sublist Sidebar
  try {
    var arrow = $('.js-arrow');
    arrow.each(function () {
      var that = $(this);
      that.on('click', function (e) {
        e.preventDefault();
        that.find(".arrow").toggleClass("up");
        that.toggleClass("open");
        that.parent().find('.js-sub-list').slideToggle("250");
      });
    });

  } catch (error) {
    console.log(error);
  }


  try {
    // Hamburger Menu
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.navbar-mobile').slideToggle('500');
    });
    $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
      var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
      $(this).toggleClass('active');
      $(dropdown).slideToggle('500');
      return false;
    });
  } catch (error) {
    console.log(error);
  }
})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  // Load more
  try {
    var list_load = $('.js-list-load');
    if (list_load[0]) {
      list_load.each(function () {
        var that = $(this);
        that.find('.js-load-item').hide();
        var load_btn = that.find('.js-load-btn');
        load_btn.on('click', function (e) {
          $(this).text("Loading...").delay(1500).queue(function (next) {
            $(this).hide();
            that.find(".js-load-item").fadeToggle("slow", 'swing');
          });
          e.preventDefault();
        });
      })

    }
  } catch (error) {
    console.log(error);
  }

})(jQuery);
(function ($) {
  // USE STRICT
  "use strict";

  try {
    
    $('[data-toggle="tooltip"]').tooltip();

  } catch (error) {
    console.log(error);
  }

  // Chatbox
  try {
    var inbox_wrap = $('.js-inbox');
    var message = $('.au-message__item');
    message.each(function(){
      var that = $(this);

      that.on('click', function(){
        $(this).parent().parent().parent().toggleClass('show-chat-box');
      });
    });
    

  } catch (error) {
    console.log(error);
  }

})(jQuery);

function setHeader(xhr) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8000');
      }


(function ($) {
  $("select#platform").change(function(){

  $.ajax({
          url: 'http://10.112.86.90/api/build',
          type: 'GET',
          contentType:'application/json',
          dataType: 'json',
          data: {platform: $(this).val()},
          beforeSend: function() {
            $(".fa-spin").show();
            if($("#platform").val())
            {
                $("#editStatus").show();
                $("#saveStatus").hide();
            }
            else{
                $("#editStatus").hide();
                $("#saveStatus").hide();
            }
            },
          success: function(data) {
          $(".fa-spin").hide();
          var options = '<option value="">---Build----</option>';
          var statuscode = 0;
          for (var i = 0; i < data.length; i++) {
           options += '<option value="' + data[i].buildId + "--"+data[i].statusType+"--"+data[i].downloadLink+'">' + data[i].buildName + '</option>';
           statusCode=1
           }

          $("select#build").html(options);

          if ( statuscode == 0 ){
          $('.help-block').hide();
          $('.testcase-pass-tables').hide();
           $('.testcase-fail-tables').hide();
            myChart.data.datasets[0].data[0] = 0;
            myChart.data.datasets[0].data[1] = 0;
            myChart.update();
            $("#download").attr("href","#")
          }

          },
          error: function() { alert('Something wrong happen. Please try again!'); }
        });

  $.ajax({
          url: 'http://10.112.86.90/api/agent',
          type: 'GET',
          contentType:'application/json',
          dataType: 'json',
          data: {platform: $(this).val()},
          beforeSend: function() {
            //$(".fa-spin").show();
            },
          success: function(data) {
          //$(".fa-spin").hide();
          console.log(data);
          var options = '';
          var statuscode = '';
          for (var i = 0; i < data.length; i++) {
           options += '<tr><td>'+getbubble(data[i].AgentRunningStatus,data[i].agentIP)+'</td><td>' + data[i].agentIP + '</td><td><span class="agentState">'+ data[i].agentState+'</span>'+ getdropdown(data[i].agentIP) +'</span></td><td>'+ data[i].buildName +'</td><td>'+ data[i].buildState +'</td></tr>';

           }
         if (data.length == 0){
          options += '<tr><td colspan="4" style="text-align:left">No Agent found for this platform </td></tr>'
         }
          $("tbody#agentdata").html(options);

          },
          error: function() { alert('Something wrong happen. Please try again!'); }
        });




      });
  })(jQuery);

(function ($) {
  $("select#build").change(function(){
  if ($(this).val())  {
  $('.help-block').show();
  $('.help-block b').html($(this).val().split("--")[1]);
  $("#download").attr("href",$(this).val().split("--")[2])

  $.ajax({
          url: 'http://10.112.86.90/api/result',
          type: 'GET',
          contentType:'application/json',
          dataType: 'json',
          data: {BuildID: $(this).val().split("--")[0]},
          beforeSend: function() {
            //$(".fa-spin").show();
            },
          success: function(data) {
          //alert(data);
          pass=[]
          fail=[]
          failoptions=""
          passoptions=""
          jQuery.each(data, function(i, val) {
          if (val=="Pass"){
          pass.push(i);

           passoptions += '<tr><td style="text-align:left"><div class="table-data__info"><h6>' + i + '</h6></div></td></tr>';

           }

          else{
          fail.push(i);
          failoptions += '<tr><td style="text-align:left"><div class="table-data__info"><h6>' + i + '</h6></div></td></tr>';
          }
          });
         if (pass.length == 0){

          passoptions += '<tr><td style="text-align:left">No Pass Testcase Found </td></tr>';
         }
         if (fail.length == 0){
          failoptions += '<tr><td style="text-align:left">No Fail Testcase Found </td></tr>';
         }
         $("tbody#passdata").html(passoptions);
         $("tbody#faildata").html(failoptions);

          myChart.data.datasets[0].data[0] = pass.length;
          myChart.data.datasets[0].data[1] = fail.length;
          myChart.update();

          },
          error: function() { alert('Something wrong happen. Please try again!'); }
        });

  }else{
  $('.help-block').hide();
   $('.testcase-pass-tables').hide();
  $('.testcase-fail-tables').hide();
  myChart.data.datasets[0].data[0] = 0;
  myChart.data.datasets[0].data[1] = 0;
  myChart.update();
  $("#download").attr("href","#");

  }
});
})(jQuery);

 try {

    //doughut chart
    var ctx = document.getElementById("doughutChart");
    if (ctx) {
      ctx.height = 385;
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [0, 0],
            backgroundColor: [
              "green",
              "red",
            ],
            hoverBackgroundColor: [
              "green",
              "red",
            ]

          }],
          labels: [
            "Pass",
            "Fail",
          ]
        },
        options: {
          legend: {
            position: 'top',
            labels: {
              fontFamily: 'Poppins'
            },


          },
          responsive: true,
          onClick:function(event,item){
                    //console.log(item[0]["_index"]);
                    console.log(item);
                    try{
                    if (item[0]["_index"] == 0){
                    $('.testcase-pass-tables').show();
                    $('.testcase-fail-tables').hide();
                    }
                    else{

                    $('.testcase-fail-tables').show();
                    $('.testcase-pass-tables').hide();
                    }
                    }catch (error){
                    }
                      }


        }
      });
    }


  } catch (error) {
    console.log(error);
  }

(function ($) {
  $("button#posttestcases").click(function(){

  var application = $('#application').val();
  var callmanager = $('#callmanager').val();
  var language = $('#language').val();
  var agentip = $('#agentip').val();
  var agentconfig = $('#agentconfig').val();
  var agentdb = $('#agentdb').val();
  var checkeddata= [];
  $('input[class="testcasecheckbox"]:checked').each(function() {
   checkeddata.push(this.value);
  });
  if (!application){
  alert("Please Choose Application before testcase submission.");
  return;
  }
  else if (!callmanager){
  alert("Please Choose Call Manager before testcase submission.");
  return;
  }
  else if (!language){
  alert("Please Choose Language before testcase submission.");
  return;
  }
  else if (!agentip){
  alert("Please Choose AgentIP before testcase submission.");
  return;
  }
  else if (!agentconfig){
  alert("Please Choose agentconfig before testcase submission.");
  return;
  }
  else if (!agentdb){
  alert("Please Choose agentDB before testcase submission.");
  return;
  }
  else if (checkeddata.length < 1){
  alert("Please Choose TestCases before testcase submission.");
  return;
  }
  $.get('http://10.112.86.90/api/build/getruntc', {application: application,callmanager:callmanager,language:language,agentip:agentip,agentconfig:agentconfig,agentdb:agentdb,testcases:checkeddata }, function(data, status){

                        //alert(data);
                        alert("Test Cases has been submitted successfully");
                    }, 'json');

});
})(jQuery);

(function ($) {
  $("select#application").change(function(){
  $.ajax({
          url: 'http://10.112.86.90/api/testmachine',
          type: 'GET',
          contentType:'application/json',
          dataType: 'json',
          data: {appName: $(this).val()},
          beforeSend: function() {
            //$(".fa-spin").show();
            },
          success: function(data) {
          options="";
          var statuscode = 0;
          options = '<option value=""> --- Choose AgentIP----</option>';
          for (var i = 0; i < data.length; i++) {
           options += '<option value="' + data[i] +'">' + data[i] + '</option>';
           statuscode=1
           }

          $("select#agentip").html(options);
          agentconfigoptions  = '<option value=""> --- Choose AgentConfig----</option>';
          agentconfigdb  = '<option value=""> --- Choose AgentDB----</option>';
          $("select#agentconfig").html(agentconfigoptions);
          $("select#agentdb").html(agentconfigdb);


          },
          error: function() { alert('Something wrong happen. Please try again!'); }
        });

  filltags();
});
})(jQuery);

(function ($) {
  $("select#agentip").change(function(){
  $.ajax({
          url: 'http://10.112.86.90/api/testmachine/GetConfig',
          type: 'GET',
          contentType:'application/json',
          dataType: 'json',
          data: {machineIP: $(this).val()},
          beforeSend: function() {
            //$(".fa-spin").show();
            },
          success: function(data) {
          options="";
          var statuscode = 0;
          options = '<option value=""> --- Choose AgentConfig----</option>';
          for (var i = 0; i < data.length; i++) {
           options += '<option value="' + data[i] +'">' + data[i] + '</option>';
           statusCode=1
           }
          $("select#agentconfig").html(options);

          agentconfigdb  = '<option value=""> --- Choose AgentDB----</option>';
          $("select#agentdb").html(agentconfigdb);

          },
          error: function() { alert('Something wrong happen. Please try again!'); }
        });
});
})(jQuery);

(function ($) {
  $("select#agentconfig").change(function(){
  $.ajax({
          url: 'http://10.112.86.90/api/testmachine/GetDB',
          type: 'GET',
          contentType:'application/json',
          dataType: 'json',
          data: {machineIP: $('#agentip').val(),ConfigName: $(this).val()},
          beforeSend: function() {
            //$(".fa-spin").show();
            },
          success: function(data) {
          var statuscode = 0;
          options = '<option value=""> --- Choose AgentDB----</option>';
          for (var i = 0; i < data.length; i++) {
           options += '<option value="' + data[i] +'">' + data[i] + '</option>';
           statusCode=1
           }
          $("select#agentdb").html(options);
          },
          error: function() { alert('Something wrong happen. Please try again!'); }
        });
});
})(jQuery);
 $(".select-ajax").select2({
   tags : true,
});

function filltags(){
$('.select-ajax').html('');
if ($('#application').val()){
// var newOption = new Option("Hello", 1, false, false);
// var newOption = new Option("Hello2", 2, false, false);


$.ajax({
          url: 'http://10.112.86.90/api/tags',
          type: 'GET',
          contentType:'application/json',
          dataType: 'json',
          data: {appname: $('#application').val()},

          success: function(data) {
          for (var i = 0; i < data.length; i++) {
          //console.log(data);
          var newOption = new Option(data[i], data[i], false, false);
          $('.select-ajax').append(newOption);
           }
          },
          error: function() { alert('Something wrong happen. Please try again!'); }
        });



}

}

$('.select-ajax').on('select2:select select2:unselect', function (e) {
    // var data = e.params.data;
    // console.log(data);
    console.log($('.select-ajax').val());
    $.ajax({
          url: 'http://10.112.86.90/api/tags/GetTC',
          type: 'GET',
          contentType:'application/json',
          dataType: 'json',
          data: {tag: $('.select-ajax').val()},
          success: function(data) {

          tabledata="";
          for (var i = 0; i < data.length; i++) {
          if(jQuery.inArray(data[i], unselected_checkbox) !== -1){
          tabledata+='<tr><td style="text-align:left;width:10%"><input type=checkbox value="'+data[i]+'" class="testcasecheckbox"  /></td><td style="text-align:left;width:10%">'+data[i]+'</td></tr>';
          }
          else{
          tabledata+='<tr><td style="text-align:left;width:10%"><input type=checkbox value="'+data[i]+'" class="testcasecheckbox" checked /></td><td style="text-align:left;width:10%">'+data[i]+'</td></tr>';
          }
          }
           $('.testcases').html(tabledata);
           $("input.testcasecheckbox").change(function() {
          datacalculation($(this));
});



          },

          error: function() {

          console.log("Some thing wrong happen");

           }
        });
});

var unselected_checkbox = [];

$("input#header-checkbox").change(function() {
    var ischecked= $(this).is(':checked');
    if(!ischecked){
     $('input:checkbox').prop('checked',false);
    }
    else{
    $('input:checkbox').prop('checked',true);
    }
});



function datacalculation(obj){

var ischecked= $(obj).is(':checked');
    if(!ischecked){
     unselected_checkbox.push($(obj).val());
    }
    else{
    unselected_checkbox.splice( $.inArray($(obj).val(), unselected_checkbox), 1 );
    }

}

function getbubble(data,ip){
circle="";
if(is_staff){
if(data == 1)
{
circle='<a href="#"  onClick="statusAction('+"'"+ip+"'"+');"><i id="'+ip+'" class="fa fa-circle" style="color:green"></i></a>';
}
else
{
circle='<a href="#"  onClick="statusAction('+"'"+ip+"'"+');"><i id="'+ip+'" class="fa fa-circle" style="color:black"></i></a>';
}
}
return circle;
}

function getdropdown(ip){

dropdown='<select class="dropdown" style="display:none"><option value="Idle---'+ip+'">Idle</option><option value="SANITY EXECUTION IN PROGRESS---'+ip+'">SANITY EXECUTION IN PROGRESS</option></select>';
return dropdown;
}

(function ($) {
  $("#refresh").click(function(){

if($("#platform").val())
{
  $.ajax({
          url: 'http://10.112.86.90/api/agent',
          type: 'GET',
          contentType:'application/json',
          dataType: 'json',
          data: {platform: $("#platform").val()},
          beforeSend: function() {
            $(".fa-spin").show();
            $("#editStatus").show();
            $("#saveStatus").hide();
            },
          success: function(data) {
          $(".fa-spin").hide();
          console.log(data);
          var options = '';
          var statuscode = '';
          for (var i = 0; i < data.length; i++) {

           options += '<tr><td>'+getbubble(data[i].AgentRunningStatus,data[i].agentIP)+'</td><td>' + data[i].agentIP + '</td><td><span class="agentState">'+ data[i].agentState +'</span>'+getdropdown(data[i].agentIP)+'</td><td>'+ data[i].buildName +'</td><td>'+ data[i].buildState +'</td></tr>';

           }
         if (data.length == 0){
          options += '<tr><td colspan="5" style="text-align:left">No Agent found for this platform </td></tr>'
         }
          $("tbody#agentdata").html(options);

          },
          error: function() { alert('Something wrong happen. Please try again!'); }
        });
}
else{
alert("Please choose platform to view agent Details");
}
      });
  })(jQuery);




function statusAction(ip){
    if(is_staff == "False"){
    alert("You have not permission to modify machine status.");
    return;
    }
    if (confirm("Do you want to reset machine status.")) {
    obj=document.getElementById(ip);
    obj.style.color= 'black';
    obj.parentNode.onclick = null;
    $.ajax({
          url: 'http://10.112.86.90/api/agent/getagentreactivate',
          type: 'GET',
          contentType:'application/json',
          dataType: 'json',
          data: {ip: ip, platform:$("#platform").val()},
          success: function(data) {

          alert("Request has been send");

          },
          error: function() { alert('Something wrong happen. Please try again!'); }
        });

    }
  }


(function ($) {
  $("#editStatus").click(function(){
  $(this).hide();
  $('.agentState').hide();
  $("#saveStatus").show();
  $(".dropdown").show();

        });
  })(jQuery);


(function ($) {
  $("#saveStatus").click(function(){

  data=""
  $(this).hide();
  $("#editStatus").show();
  $('.agentState').show();
  $(".dropdown").hide();
  $(".dropdown").each(function (){
//data.push($(this).val());
data+=$(this).val()+";";
  });
 $.get('http://10.112.86.90/api/agent/getagentstateset', {dataobj: data }, function(data, status){
      alert("Agent Status has been submitted successfully.");
                    }, 'json');
        });
  })(jQuery);



  var ctx = document.getElementById("percent-chart1");
    if (ctx) {
      ctx.height = 220;
      var myChart1 = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [
            {
              label: "My First dataset",
              data: [0, 0, 0, 0, 0 ],
              backgroundColor: [
                "green",
                "red",
                "blue",
                "orange",
                "black"
              ],
              hoverBackgroundColor: [
                "green",
                "red",
                "blue",
                "orange",
                "black"
              ],
              borderWidth: [
                0, 0
              ],
              hoverBorderColor: [
                'transparent',
                'transparent',
                'transparent',
                'transparent',
                'transparent'
              ]
            }
          ],
          labels: [
            'Online',
            'Offline',
            'Not in Use',
            'Working But Known Issue',
            'Unknown'
          ]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          cutoutPercentage: 55,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false
          },
          tooltips: {
            titleFontFamily: "Poppins",
            xPadding: 15,
            yPadding: 10,
            caretPadding: 0,
            bodyFontSize: 16
          }
        }
      });
    }


function getcolorbubble(data){
circle="";
if(data == 1)
{
circle='<i class="fa fa-circle" style="color:green"></i>';
}
else if (data == 2)
{
circle='<i class="fa fa-circle" style="color:red"></i>';
}
else if (data == 3)
{
circle='<i class="fa fa-circle" style="color:blue"></i>';
}
else if (data == 4)
{
circle='<i class="fa fa-circle" style="color:orange"></i>';
}
else if (data == 5)
{
circle='<i class="fa fa-circle" style="color:black"></i>';
}
return circle;
}

