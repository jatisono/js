<script type="text/javascript">
var a_rc = 5;
var m_rc = false;
var n_rc = true;
var o_rc = 100;
function showrecentcomments(e){for(var r=0;r<a_rc;r++){var t,n=e.feed.entry[r];if(r==e.feed.entry.length)break;for(var i=0;i<n.link.length;i++)if("alternate"==n.link[i].rel){t=n.link[i].href;break}t=t.replace("#","#");var a=t.split("#");a=a[0];var c=a.split("/");c=c[5],c=c.split(".html"),c=c[0];var s=c.replace(/-/g," ");s=s.link(a);var o=n.published.$t,l=(o.substring(0,4),o.substring(5,7)),u=o.substring(8,10),m=new Array;if(m[1]="Jan",m[2]="Feb",m[3]="Mar",m[4]="Apr",m[5]="May",m[6]="Jun",m[7]="Jul",m[8]="Aug",m[9]="Sep",m[10]="Oct",m[11]="Nov",m[12]="Dec","content"in n)var d=n.content.$t;else if("summary"in n)var d=n.summary.$t;else var d="";var v=/<\S[^>]*>/g;if(d=d.replace(v,""),document.write('<div class="rcw-comments">'),1==m_rc&&document.write("On "+m[parseInt(l,10)]+" "+u+" "),document.write('<span class="author-rc"><a href="'+t+'">'+n.author[0].name.$t+"</a></span> commented"),1==n_rc&&document.write(" on "+s),0==o_rc)document.write("</div>");else if(document.write(": "),d.length<o_rc)document.write("<i>&#8220;"),document.write(d),document.write("&#8221;</i></div>");else{document.write("<i>&#8220;"),d=d.substring(0,o_rc);var w=d.lastIndexOf(" ");d=d.substring(0,w),document.write(d+"&hellip;&#8221;</i></div>"),document.write("")}}}
</script>
