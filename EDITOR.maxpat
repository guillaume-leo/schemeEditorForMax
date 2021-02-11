{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 1,
			"revision" : 8,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"classnamespace" : "box",
		"rect" : [ 42.0, 85.0, 1449.0, 913.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 10.0,
		"default_fontface" : 1,
		"default_fontname" : "Ableton Sans Medium",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "guiqDark1",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 0.0, 602.0, 27.0, 20.0 ],
					"saved_object_attributes" : 					{
						"ins" : 1,
						"log-null" : 0,
						"outs" : 1,
						"thread" : 104
					}
,
					"text" : "s4m"
				}

			}
, 			{
				"box" : 				{
					"bgmode" : 0,
					"border" : 0,
					"clickthrough" : 0,
					"enablehscroll" : 0,
					"enablevscroll" : 0,
					"id" : "obj-3",
					"lockeddragscroll" : 0,
					"maxclass" : "bpatcher",
					"name" : "editor_sub.maxpat",
					"numinlets" : 0,
					"numoutlets" : 1,
					"offset" : [ 0.0, 0.0 ],
					"outlettype" : [ "" ],
					"patching_rect" : [ 0.0, 0.0, 608.0, 600.0 ],
					"viewvisibility" : 1
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-4", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "editor_sub.maxpat",
				"bootpath" : "~/Desktop/max/schemeEditor-main",
				"patcherrelativepath" : ".",
				"type" : "JSON",
				"implicit" : 1
			}
, 			{
				"name" : "helloWorld.txt",
				"bootpath" : "~/Desktop/max/schemeEditor-main",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "s4m.mxe64",
				"type" : "mx64"
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "guiqDark1",
				"default" : 				{
					"elementcolor" : [ 0.235294117647059, 0.482352941176471, 0.572549019607843, 1.0 ],
					"locked_bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"color" : [ 0.070588235294118, 0.686274509803922, 0.564705882352941, 1.0 ],
					"fontface" : [ 1 ],
					"editing_bgcolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"stripecolor" : [ 0.0, 0.0, 0.0, 1.0 ],
					"textcolor_inverse" : [ 0.76078431372549, 0.709803921568627, 0.709803921568627, 1.0 ],
					"patchlinecolor" : [ 0.619607843137255, 0.007843137254902, 0.831372549019608, 1.0 ],
					"clearcolor" : [ 0.0, 0.149019607843137, 0.647058823529412, 0.46 ],
					"fontsize" : [ 10.0 ],
					"textcolor" : [ 0.556862745098039, 0.513725490196078, 0.125490196078431, 1.0 ],
					"accentcolor" : [ 0.0, 0.003921568627451, 0.352941176470588, 1.0 ],
					"fontname" : [ "Ableton Sans Medium" ],
					"textjustification" : [ 0 ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
 ]
	}

}
