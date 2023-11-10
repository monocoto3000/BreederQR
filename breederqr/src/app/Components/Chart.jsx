"use client"
import { memo } from 'react';
import ApexChart from 'react-apexcharts';

import { alpha, styled, useTheme } from '@mui/material/styles';

import { merge } from 'lodash';

import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

function customShadows() {
    const transparent = alpha(grey[500], 0.16);
  
    return {
      z1: `0 1px 2px 0 ${transparent}`,
      z4: `0 4px 8px 0 ${transparent}`,
      z8: `0 8px 16px 0 ${transparent}`,
      z12: `0 12px 24px -4px ${transparent}`,
      z16: `0 16px 32px -4px ${transparent}`,
      z20: `0 20px 40px -4px ${transparent}`,
      z24: `0 24px 48px 0 ${transparent}`,
      //
      card: `0 0 2px 0 ${alpha(grey[500], 0.08)}, 0 12px 24px -4px ${alpha(grey[500], 0.08)}`,
      dropdown: `0 0 2px 0 ${alpha(grey[500], 0.24)}, -20px 20px 40px -4px ${alpha(grey[500], 0.24)}`,
      dialog: `-40px 40px 80px -8px ${alpha(common.black, 0.24)}`,
      //
      primary: `0 8px 16px 0 ${alpha(primary.main, 0.24)}`,
      info: `0 8px 16px 0 ${alpha(info.main, 0.24)}`,
      secondary: `0 8px 16px 0 ${alpha(secondary.main, 0.24)}`,
      success: `0 8px 16px 0 ${alpha(success.main, 0.24)}`,
      warning: `0 8px 16px 0 ${alpha(warning.main, 0.24)}`,
      error: `0 8px 16px 0 ${alpha(error.main, 0.24)}`,
    };
  }

function useResponsive(query, start, end) {
    const theme = useTheme();
  
    const mediaUp = useMediaQuery(theme.breakpoints.up(start));
  
    const mediaDown = useMediaQuery(theme.breakpoints.down(start));
  
    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));
  
    const mediaOnly = useMediaQuery(theme.breakpoints.only(start));
  
    if (query === 'up') {
      return mediaUp;
    }
  
    if (query === 'down') {
      return mediaDown;
    }
  
    if (query === 'between') {
      return mediaBetween;
    }
  
    return mediaOnly;
  }

export function useChart(options) {
    const theme = useTheme();
  
    const smUp = useResponsive('up', 'sm');
  
    const LABEL_TOTAL = {
      show: true,
      label: 'Total',
      color: theme.palette.text.secondary,
      fontSize: theme.typography.subtitle2.fontSize,
      fontWeight: theme.typography.subtitle2.fontWeight,
      lineHeight: theme.typography.subtitle2.lineHeight,
    };
  
    const LABEL_VALUE = {
      offsetY: 8,
      color: theme.palette.text.primary,
      fontSize: theme.typography.h3.fontSize,
      fontWeight: theme.typography.h3.fontWeight,
      lineHeight: theme.typography.h3.lineHeight,
    };
  
    const baseOptions = {
      // Colors
      colors: [
        theme.palette.primary.main,
        theme.palette.warning.main,
        theme.palette.info.main,
        theme.palette.error.main,
        theme.palette.success.main,
        theme.palette.warning.dark,
        theme.palette.success.darker,
        theme.palette.info.dark,
        theme.palette.info.darker,
      ],
  
      // Chart
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false },
        // animations: { enabled: false },
        foreColor: theme.palette.text.disabled,
        fontFamily: theme.typography.fontFamily,
      },
  
      // States
      states: {
        hover: {
          filter: {
            type: 'lighten',
            value: 0.04,
          },
        },
        active: {
          filter: {
            type: 'darken',
            value: 0.88,
          },
        },
      },
  
      // Fill
      fill: {
        opacity: 1,
        gradient: {
          type: 'vertical',
          shadeIntensity: 0,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 100],
        },
      },
  
      // Datalabels
      dataLabels: {
        enabled: false,
      },
  
      // Stroke
      stroke: {
        width: 3,
        curve: 'smooth',
        lineCap: 'round',
      },
  
      // Grid
      grid: {
        strokeDashArray: 3,
        borderColor: theme.palette.divider,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
  
      // Xaxis
      xaxis: {
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
  
      // Markers
      markers: {
        size: 0,
        strokeColors: theme.palette.background.paper,
      },
  
      // Tooltip
      tooltip: {
        theme: false,
        x: {
          show: true,
        },
      },
  
      // Legend
      legend: {
        show: true,
        fontSize: 13,
        position: 'top',
        horizontalAlign: 'right',
        markers: {
          radius: 12,
        },
        fontWeight: 500,
        itemMargin: {
          horizontal: 8,
        },
        labels: {
          colors: theme.palette.text.primary,
        },
      },
  
      // plotOptions
      plotOptions: {
        // Bar
        bar: {
          borderRadius: smUp ? 3 : 1,
          columnWidth: '28%',
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'last',
        },
  
        // Pie + Donut
        pie: {
          donut: {
            labels: {
              show: true,
              value: LABEL_VALUE,
              total: LABEL_TOTAL,
            },
          },
        },
  
        // Radialbar
        radialBar: {
          track: {
            strokeWidth: '100%',
            background: alpha(theme.palette.grey[500], 0.16),
          },
          dataLabels: {
            value: LABEL_VALUE,
            total: LABEL_TOTAL,
          },
        },
  
        // Radar
        radar: {
          polygons: {
            fill: { colors: ['transparent'] },
            strokeColors: theme.palette.divider,
            connectorColors: theme.palette.divider,
          },
        },
  
        // polarArea
        polarArea: {
          rings: {
            strokeColor: theme.palette.divider,
          },
          spokes: {
            connectorColors: theme.palette.divider,
          },
        },
      },
  
      // Responsive
      responsive: [
        {
          // sm
          breakpoint: theme.breakpoints.values.sm,
          options: {
            plotOptions: { bar: { columnWidth: '40%' } },
          },
        },
        {
          // md
          breakpoint: theme.breakpoints.values.md,
          options: {
            plotOptions: { bar: { columnWidth: '32%' } },
          },
        },
      ],
    };
  
    return merge(baseOptions, options);
  }

export function bgBlur(props) {
    const color = props?.color || '#000000';
    const blur = props?.blur || 6;
    const opacity = props?.opacity || 0.8;
    const imgUrl = props?.imgUrl;
  
    if (imgUrl) {
      return {
        position: 'relative',
        backgroundImage: `url(${imgUrl})`,
        '&:before': {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 9,
          content: '""',
          width: '100%',
          height: '100%',
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          backgroundColor: alpha(color, opacity),
        },
      };
    }
  
    return {
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      backgroundColor: alpha(color, opacity),
    };
  }

const Chart = styled(ApexChart)(({ theme }) => ({
  '& .apexcharts-canvas': {
    // Tooltip
    '& .apexcharts-tooltip': {
      ...bgBlur({
        color: theme.palette.background.default,
      }),
      color: theme.palette.text.primary,
      boxShadow: customShadows.dropdown,
      borderRadius: theme.shape.borderRadius * 1.25,
      '&.apexcharts-theme-light': {
        borderColor: 'transparent',
        ...bgBlur({
          color: theme.palette.background.default,
        }),
      },
    },
    '& .apexcharts-xaxistooltip': {
      ...bgBlur({
        color: theme.palette.background.default,
      }),
      borderColor: 'transparent',
      color: theme.palette.text.primary,
      boxShadow: customShadows.dropdown,
      borderRadius: theme.shape.borderRadius * 1.25,
      '&:before': {
        borderBottomColor: alpha(theme.palette.grey[500], 0.24),
      },
      '&:after': {
        borderBottomColor: alpha(theme.palette.background.default, 0.8),
      },
    },
    '& .apexcharts-tooltip-title': {
      textAlign: 'center',
      fontWeight: theme.typography.fontWeightBold,
      backgroundColor: alpha(theme.palette.grey[500], 0.08),
      color: theme.palette.text[theme.palette.mode === 'light' ? 'secondary' : 'primary'],
    },

    // LEGEND
    '& .apexcharts-legend': {
      padding: 0,
    },
    '& .apexcharts-legend-series': {
      display: 'inline-flex !important',
      alignItems: 'center',
    },
    '& .apexcharts-legend-marker': {
      marginRight: 8,
    },
    '& .apexcharts-legend-text': {
      lineHeight: '18px',
      textTransform: 'capitalize',
    },
  },
}));

export default memo(Chart);