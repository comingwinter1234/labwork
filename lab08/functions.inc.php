<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    $postId = "postId".$number;
    $userId = "userId".$number;
    $userName = "userName".$number;
    $date = "date".$number;
    $thumb = "thumb".$number;
    $thumb = "images/".$$thumb;
    $title = "title".$number;
    $excerpt = "excerpt".$number;
    $reviewsNum = "reviewsNum".$number;
    $reviewsRating = "reviewsRating".$number;
    $star_gold="images/star-gold.svg";
    $star_white="images/star-white.svg";

echo "<div class='row'><div class='col-md-4'><a href='#'><img src =".$thumb."></a></div>";
    echo "<div class='col-md-8'><h2>".$$title."</h2>";
    echo "<div class='details'>POSTED BY <a href = '#'>".$$userName."</a><span class='pull-right'>".$$date."</span>".
    "<p class='ratings'>";
for($i=1;$i<=$$reviewsRating;$i++){
echo "<img width='16' src='".$star_gold."'>";
}
for($k=1;$k<=5-$$reviewsRating;$k++){
echo "<img width='16' src='".$star_white."'>";
}
echo " ".$$reviewsNum." REVIEWS</p>";

    echo "<p class='excerpt'>".$$excerpt."</p>";
    echo "<p><a class='btn btn-warning btn-sm'>Read more</a></p></div></div></div><hr>";


}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";
    
    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }
    
    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }    
    
    return $imgTags;    
}

?>