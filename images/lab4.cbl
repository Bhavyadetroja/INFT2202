       identification division.
       program-id. lab5.
       author. Punit Patel
       date-written. date.
      *Program Description: 
      *
       environment division.
      *
       input-output section.
       file-control.
      * TODO: correct file paths if needed
           select sales-file  
               assign to "../../data/lab5.dat"
               organization is line sequential.
                    
           select report-file 
               assign to "../../data/lab5.out"
               organization is line sequential.
      *
       data division.
       file section.
       fd sales-file 
           data record is sales-rec
           record contains 32 characters.
      *
       01 sales-rec.
           05 sr-sman-num              pic 999.
           05 sr-name                  pic x(8).
           05 sr-sales                 pic 9(6).
           05 sr-min                   pic 9(6).
           05 sr-max                   pic 9(6).
           05 sr-rate                  pic 99v9.
      *
       fd report-file 
           data record is report-line
           record contains 120 characters.
      *
       01 report-line                  pic x(120).
      *
       working-storage section.
      *
       01 ws-eof-flag                  pic x 
           value 'n'.
      *
       01 ws-heading1-name-line.
           05 filler                   pic x(5)
               value spaces.
           05 ws-nl-date               pic 9(6).
           05 filler                   pic x(5)
               value spaces.
           05 ws-nl-time               pic 9(8).
           05 filler                   pic x(23)
               value spaces.
           05 filler                   pic x(28)
               value "            Punit Patel, LAB 5".
      *               ----=----1----=----2----=---
           05 filler                   pic x(45)
               value spaces.
      *
       01 ws-heading2-title.
           05 filler                   pic x(26)
               value spaces.
           05 filler                   pic x(24)
               value "SALES COMMISSION REPORT ".
           05 filler                   pic x(70)
               value spaces.
      *
       01 ws-heading3-headings.
           05 filler                   pic x(1)
               value spaces.
           05 filler                   pic x(2)
               value "NO".
           05 filler                   pic x(4)
               value spaces.       
           05 filler                   pic x(4)
               value "NAME".       
           05 filler                   pic x(7)
               value spaces.       
           05 filler                   pic x(5)
               value "SALES".       
           05 filler                   pic x(6)
               value spaces.       
           05 filler                   pic x(3)
               value "MIN".       
           05 filler                   pic x(6)
               value spaces.       
           05 filler                   pic x(3)
               value "MAX".       
           05 filler                   pic x(3)
               value spaces.       
           05 filler                   pic x(4)
               value "RATE".       
           05 filler                   pic x(7)
               value spaces.       
           05 filler                   pic x(6)
               value "EARNED".       
           05 filler                   pic x(8)
               value spaces.       
           05 filler                   pic x(4)
               value "PAID".
           05 filler                   pic x(47)
               value spaces.
      *
       01 ws-heading4-underlines.
           05 filler                   pic x(3)
               value "---".
           05 filler                   pic x(4)
               value spaces.
           05 filler                   pic x(4)
               value "----".
           05 filler                   pic x(7)
               value spaces.
           05 filler                   pic x(5)
               value "-----".
           05 filler                   pic x(6)
               value spaces.
           05 filler                   pic x(3)
               value "---".
           05 filler                   pic x(6)
               value spaces.
           05 filler                   pic x(3)
               value "---".
           05 filler                   pic x(3)
               value spaces.
           05 filler                   pic x(4)
               value "----".
           05 filler                   pic x(7)
               value spaces.
           05 filler                   pic x(6)
               value "------".
           05 filler                   pic x(8)
               value spaces.
           05 filler                   pic x(4)
               value "----".
           05 filler                   pic x(64)
               value spaces.
      *
       01 ws-report-detail-line.
           05 ws-rpt-sman-num          pic 999.
           05 filler                   pic x(3).
           05 ws-rpt-name              pic x(8).
           05 filler                   pic x(3).
           05 ws-rpt-sales             pic zzz,zz9.
           05 filler                   pic x(2).
           05 ws-rpt-min               pic zzz,zz9.
           05 filler                   pic x(2).
           05 ws-rpt-max               pic zzz,zz9.
           05 filler                   pic x(2).
           05 ws-rpt-rate              pic z9.9.
           05 ws-rpt-percent-sign      pic x.
           05 filler                   pic x(2).
           05 ws-rpt-earned            pic zzz,zzz,zz9.
           05 filler                   pic x(2).
           05 ws-rpt-paid              pic $**,***,**9.
           05 ws-rpt-text              pic x(50).
      *
       01 ws-total-line.
           05 filler                   pic x(40)
               value spaces.
           05 filler                   pic x(6)
               value "Totals".
           05 filler                   pic x(5)
               value spaces.
           05 ws-tl-tot-earned         pic $$$,$$$,$$9.
           05 filler                   pic x(2)
               value spaces.
           05 ws-tl-tot-paid           pic $$$,$$$,$$9.
           05 filler                   pic x(45)
               value spaces.
      *
       01  ws-num-max-line.
           05 filler                   pic x(5) 
               value spaces.
           05 filler                   pic x(40)
               value "NUMBER WITH BONUS MORE THAN MAX         ".
      *               ----=----1----=----2----=----3----=----4
           05 filler                   pic x(4)
               value spaces.
           05 ws-maxl-num-mor-max      pic z9.
           05 filler                   pic x(69)
               value spaces.
      *
       01  ws-num-min-line.
           05 filler                   pic x(5) 
               value spaces.
           05 filler                   pic x(40)
               value "NUMBER WITH NO BONUS LESS THAN MIN      ".
      *               ----=----1----=----2----=----3----=----4
           05 filler                   pic x(4)
               value spaces.
           05 ws-minl-num-less-min     pic z9.
           05 filler                   pic x(69)
               value spaces.
      *
       77 ws-earned                    pic 9(9)
           value 0.
       77 ws-paid                      pic 9(9)
           value 0.
       77 ws-total-earned              pic 9(9)
           value 0.
       77 ws-total-paid                pic 9(9)
           value 0.
       77 ws-line-count                pic 99 
           value 0.
       77 ws-lines-per-page            pic 99 
           value 5.
       77 ws-page-count                pic 99 
           value 0.
       77 ws-more-than-max             pic 99 
           value 0.
       77 ws-less-than-min             pic 99 
           value 0.
       77 ws-bonus-limit               pic 9(9)
           value 300000.
       77 ws-bonus-rate                pic 99v99
           value 15.25.
       77 ws-percent-sign-cnst         pic x
           value "%".
      *
       procedure division.
       000-main.
           open input  sales-file,
                output report-file.
      *
           accept ws-nl-date from date.
           accept ws-nl-time from time.
      *
           read sales-file 
               at end move 'y'         to ws-eof-flag.
      *
           perform 100-process-pages
               varying ws-page-count   from 1 by 1
               until   ws-eof-flag = 'y'.
      *
           perform 300-print-totals.
      *
           close   sales-file
                   report-file.
      *
           stop run.
      *
       100-process-pages.
      *
               perform 200-print-headings.
      *
               perform 300-process-lines 
                   varying ws-line-count from 1 by 1
                   until ws-line-count >= ws-lines-per-page 
                       or ws-eof-flag = 'y'.
      *
       200-print-headings.
      *
           move spaces                 to ws-report-detail-line.
      *
           if ws-page-count = 1 then
               write report-line from ws-heading1-name-line
                   after advancing 1 line
           end-if.
      *
           if ws-page-count > 1 then
               move spaces             to report-line
               write report-line 
                   after page
               write report-line from ws-heading2-title
                   after advancing 1 line
           else
               write report-line from ws-heading2-title
                   after advancing 1 line
           end-if.
      *
           write report-line from ws-heading3-headings
               after advancing 1 line.
      *
           write report-line from ws-heading4-underlines
               after advancing 1 line.
      *
       300-process-lines.
       
      * determine if sales for this employee are over the bonus limit
           if sr-sales > ws-bonus-limit
      *
      * employee has earned bonus
      * calculate earned as normal sales commission 
      * PLUS 12.5% of the amount over the bonus threshold
      *
               compute ws-earned rounded = 
                   (sr-sales * sr-rate / 100) +
                   (sr-sales - ws-bonus-limit) * ws-bonus-rate / 100
               if ws-earned > sr-max then
                   move sr-max         to ws-paid
                   add  1              to ws-more-than-max
               else
                   move ws-earned      to ws-paid
               end-if
           else
               compute ws-earned rounded = sr-sales * sr-rate / 100
               if ws-earned < sr-min then
                   move sr-min         to ws-paid
                   add  1              to ws-less-than-min
               else
                   move ws-earned      to ws-paid
               end-if
           end-if.
      *
           add ws-earned               to ws-total-earned.
           add ws-paid                 to ws-total-paid.
      *
           move spaces                 to ws-report-detail-line.
           move sr-sman-num            to ws-rpt-sman-num.
           move sr-name                to ws-rpt-name.
           move sr-sales               to ws-rpt-sales.
           move sr-min                 to ws-rpt-min.
           move sr-max                 to ws-rpt-max.
           move sr-rate                to ws-rpt-rate.
           move ws-percent-sign-cnst   to ws-rpt-percent-sign.
           move ws-earned              to ws-rpt-earned.
           move ws-paid                to ws-rpt-paid.
      *
           write report-line from ws-report-detail-line
               after advancing 1 line.
      *
           read sales-file 
               at end move 'y'         to ws-eof-flag.
      *
       300-print-totals.
      *
           move ws-total-earned        to ws-tl-tot-earned.
           move ws-total-paid          to ws-tl-tot-paid.
      *
           write report-line from ws-total-line
               after advancing 2 lines.
      *
           move ws-more-than-max       to ws-maxl-num-mor-max.
      *
           write report-line from ws-num-max-line
               after advancing 2 lines.
      *
           move ws-less-than-min       to ws-minl-num-less-min.
      *
           write report-line from ws-num-min-line
               after advancing 1 lines.
      *
       end program lab5.