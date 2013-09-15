module RodrigoquaresmaHelper

def image_container image
	"xlink:href=\"assets/#{image}\"".html_safe
end

end
