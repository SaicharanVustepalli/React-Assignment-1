<!DOCTYPE html>
<script>
a=prompt("enter a character");
function realType(a)
{
if(a=="true" || a=="false")
{
return "boolean";
}
else if (a=="null")
{
return "null";
}
else if(a=="[]")
{
return "array";
}
else if(a%1==0)
{
 return "number";
}
else (a.charCodeAt(0)>=65 && a.charCodeAt(0)<=122)
{
return "string";
}

}
alert(realType(a));
</script>